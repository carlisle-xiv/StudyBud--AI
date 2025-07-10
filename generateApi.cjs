/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

const schemaFile = args.indexOf("--schema");
const outputFile = args.indexOf("--out");

if (schemaFile === -1) throw new Error("--schema file is required");
if (outputFile === -1) throw new Error("--out file path is required");

const apiSchemaFilePath = path.join(process.cwd(), args[schemaFile + 1]);

const fileReadString = fs.createReadStream(apiSchemaFilePath);
const fileReader = readline.createInterface(fileReadString);

let template = "";

template += `
import { ApiRequestResult, Maybe } from '@/_shared/lib/api';
import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ServerErrorResponse } from '@/_shared/services/errorService';
import { apiGet, apiPost, apiPut, apiPatch, apiDelete, Headers } from '@/_shared/services/apiService';
`;

let isParsingEnum = false;

fileReader.on("line", (line) => {
  if (line.startsWith("//")) return;

  const texts = line
    .trim()
    .split(" ")
    .filter((text) => !!text);

  const firstWord = texts[0];
  const startsAnObject = line.trim().endsWith("{");
  const isARequest = line.includes("(");

  const isKeyword = [
    "type",
    "input",
    "enum",
    "get",
    "post",
    "put",
    "delete",
    "patch",
  ].includes(firstWord);

  if ((isKeyword && startsAnObject) || (isKeyword && isARequest)) {
    if (firstWord === "enum") {
      isParsingEnum = true;
      template += `export enum ${texts[1]} {\n`;
    }

    if (firstWord === "type" || firstWord === "input") {
      template += `export interface ${texts[1]} {\n`;
    }

    if (firstWord === "get") template += constructGetMethodsAndHooks(texts);

    if (firstWord === "post") template += constructPostMethodsAndHooks(texts);

    if (firstWord === "put") template += constructPutMethodsAndHooks(texts);

    if (firstWord === "delete")
      template += constructDeleteMethodsAndHooks(texts);

    if (firstWord === "patch") template += constructPatchMethodsAndHooks(texts);
  } else {
    // handle enum pairs
    if ((texts.includes("=") || isParsingEnum) && firstWord !== "}") {
      const value = (texts[2] ?? firstWord).replaceAll('"', "");
      template += `${firstWord} = "${value}",\n`;
    }

    if (texts.includes("{")) template += `${firstWord}: {\n`;

    if (/\w+\s+(\[?@?\w+!?\]?)/.test(line.trim()))
      template += getTypeField(texts);

    if (firstWord === "}") {
      template += "}\n";
      isParsingEnum = false;
    }
  }
});

function constructGetMethodsAndHooks(texts) {
  const [queryName, url, input] = getHookParams(texts.slice(1));
  const response = getSchemaTypescriptType(texts[3] ?? texts[2]);
  const queryKey = `Get${queryName}QueryKey`;
  const apiFunctionName = `get${queryName}`;

  let temp = `export const ${queryKey} = ${url};\n`;
  temp += `export function ${apiFunctionName}(args:{${
    input ? `variables: ${input};` : ""
  } headers: Headers; signal?: AbortSignal}){\n`;
  temp += `\treturn apiGet<${response}>({path: ${queryKey}, signal: args.signal, headers: args.headers, ${
    input ? "variables: args.variables" : ""
  } })`;
  temp += "}\n";

  temp += `export function useGet${queryName}Query<T = ApiRequestResult<${response}>>(options: UseQueryOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, T, [string, ${
    input ? `${input}, Headers` : "Headers"
  }]> & ${input ? `{variables: ${input}; headers:Headers}` : "{headers:Headers}"}){
	return useQuery({
				...options,
				queryKey: [${queryKey}, ${input ? `options.variables, options.headers` : "options.headers"}],
				queryFn: async ({signal}) => ${apiFunctionName}({signal, headers: options.headers, ${
          input ? `variables: options.variables` : ""
        }}),});}\n`;
  temp += `export function useGet${queryName}LazyQuery(options?: UseMutationOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, {headers?:Headers;${
    input ? `variables:${input}` : ""
  }}>) { return useMutation((args: { headers: Headers; ${
    input ? `variables: ${input}` : ""
  }}) => ${apiFunctionName}({headers:args.headers${
    input ? ",variables:args.variables" : ""
  }}), options);}`;
  return temp;
}

function constructPostMethodsAndHooks(texts) {
  const [queryName, url, input] = getHookParams(texts.slice(1));
  const response = getSchemaTypescriptType(texts[3] ?? texts[2]);
  const apiFunctionName = `post${queryName}`;
  let temp = `export function ${apiFunctionName}(args: { ${
    input ? `variables: ${input};` : ""
  } headers:Headers; }){\n`;
  temp += `\treturn apiPost<${response}, ${input ?? "unknown"}>({path: ${url}, ${
    input ? "variables:args.variables," : ""
  } headers: args.headers });`;
  temp += "}\n";
  temp += `export function use${queryName}Mutation(options?:UseMutationOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; ${
    input ? `variables:${input}` : ""
  }}>){\n`;
  temp += `\treturn useMutation((args: {${
    input ? `variables:${input};` : ""
  } headers:Headers}) => ${apiFunctionName}({headers:args.headers, ${
    input ? "variables:args.variables" : ""
  }}), options);`;
  temp += "}\n\n";
  return temp;
}

function constructPutMethodsAndHooks(texts) {
  const [queryName, url, input] = getHookParams(texts.slice(1));
  const response = getSchemaTypescriptType(texts[3]);
  const apiFunctionName = `put${queryName}`;
  let temp = `export function ${apiFunctionName}(args: {variables: ${input}; headers:Headers; }){\n`;
  temp += `\treturn apiPut<${response}, ${input}>({path: ${url}, variables:args.variables, headers: args.headers });`;
  temp += "}\n";
  temp += `export function use${queryName}Mutation(options?:UseMutationOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers;variables:${input};}>){\n`;
  temp += `\treturn useMutation((args: {variables: ${input}; headers:Headers}) => ${apiFunctionName}({headers:args.headers, variables:args.variables}), options);`;
  temp += "}\n\n";
  return temp;
}

function constructDeleteMethodsAndHooks(texts) {
  const [queryName, url, input] = getHookParams(texts.slice(1));
  const response = getSchemaTypescriptType(texts[3]);
  const apiFunctionName = `delete${queryName}`;
  let temp = `export function ${apiFunctionName}(args: {variables: ${input}; headers:Headers; }){\n`;
  temp += `\treturn apiDelete<${response}, ${input}>({path: ${url}, variables:args.variables, headers: args.headers });`;
  temp += "}\n";
  temp += `export function use${queryName}Mutation(options?:UseMutationOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers;variables:${input}}>){\n`;
  temp += `\treturn useMutation((args: {variables: ${input}; headers:Headers}) => ${apiFunctionName}({headers:args.headers, variables:args.variables}), options);`;
  temp += "}\n\n";
  return temp;
}

function constructPatchMethodsAndHooks(texts) {
  const [queryName, url, input] = getHookParams(texts.slice(1));
  const response = getSchemaTypescriptType(texts[3]);
  const apiFunctionName = `patch${queryName}`;
  let temp = `export function ${apiFunctionName}(args: {variables: ${input}; headers:Headers; }){\n`;
  temp += `\treturn apiPatch<${response}, ${input}>({path: ${url}, variables:args.variables, headers: args.headers });`;
  temp += "}\n";
  temp += `export function use${queryName}Mutation(options?:UseMutationOptions<ApiRequestResult<${response}>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers;variables:${input}}>){\n`;
  temp += `\treturn useMutation((args: {variables: ${input}; headers:Headers}) => ${apiFunctionName}({headers:args.headers, variables:args.variables}), options);`;
  temp += "}\n\n";
  return temp;
}

function getHookParams(texts) {
  return texts.reduce((acc, text) => {
    const sanitizedText = text.replace(",", "").replace(":", "");
    let items = [];
    if (sanitizedText.includes("(")) {
      const [queryName, url] = sanitizedText.split("(");
      items = items.concat([queryName, url.replace(")", "")]);
      return acc.concat(items);
    }
    if (sanitizedText.includes(")"))
      items = items.concat(sanitizedText.replace(")", ""));
    return acc.concat(items);
  }, []);
}

/**
 * @param {String[]} texts
 */
function getTypeField([key, type]) {
  if (!key || !type) throw new Error("Schema values is incorrect");
  const isOptionalField = type.includes("?") || type.includes("!");
  return `${key}${isOptionalField ? "?:" : ":"} ${type
    .split("|")
    .filter(Boolean)
    .map(getSchemaTypescriptType)
    .join("|")};\n`;
}

/**
 * @param {String} text
 * @returns String
 */
function getSchemaTypescriptType(text) {
  const isOptional = text.includes("!") || text.includes("?");
  const regex = /(\[\W?\w+!?\]|\W?\w+!?\[\])/gi;
  const isArray = regex.test(text);

  const sanitizedText = sanitize(text);

  if (text === "|") return " | ";

  const mapping = {
    Int: "number",
    String: "string",
    Boolean: "boolean",
    Object: "Record<string, any>",
    Date: "(Date|string)",
  };

  const type = mapping[sanitizedText] ?? sanitizedText;
  return getTypescriptObjectType({ type, isOptional, isArray });
}

/**
 * @param {String} text
 */
function sanitize(text) {
  const literals = ["!", "?", "[", "]", "@"];
  return text
    .split("")
    .filter((letter) => !literals.includes(letter))
    .join("");
}

function getTypescriptObjectType({
  type,
  isArray = false,
  isOptional = false,
}) {
  return `${isOptional ? "Maybe<" : ""}${isArray ? "Array<" : ""}${type}${isArray ? ">" : ""}${
    isOptional ? ">" : ""
  }`;
}

fileReader.on("close", () => {
  const generatedCodeFilePath = path.join(process.cwd(), args[outputFile + 1]);
  const fileExists = fs.existsSync(generatedCodeFilePath);
  if (fileExists) fs.writeFileSync(generatedCodeFilePath, template);
  else fs.appendFileSync(generatedCodeFilePath, template);
});
