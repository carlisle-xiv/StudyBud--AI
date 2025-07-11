import axios, { AxiosResponse } from "axios";
import { Maybe } from "@/_shared/lib/api";
import { getBaseApiUrl } from "@/_shared/services/authService";

export type Headers = {
  "school-id"?: number | undefined;
  token: string | undefined;
};

export async function apiGet<TResponse, TVariables = unknown>(args: {
  path: string;
  variables?: TVariables;
  headers?: Headers;
  signal?: AbortSignal;
}) {
  const { path, variables } = insertURLValues<TVariables>(
    args.path,
    args.variables,
  );
  let url = path;
  if (variables) {
    const searchParams = new URLSearchParams();
    Object.entries(variables).forEach(([key, value]) => {
      if (typeof value === "undefined" || value === null) return;
      searchParams.set(
        key,
        Array.isArray(value) || typeof value === "object"
          ? JSON.stringify(value)
          : String(value),
      );
    });
    url += searchParams.toString() ? "?" + searchParams.toString() : "";
  }

  const apiUrl = getBaseApiUrl() + url;
  const headers = getHeaders(args.headers);

  return axios
    .get<{
      data?: TResponse;
      count?: number;
    }>(apiUrl, { signal: args.signal, headers })
    .then((res) => ({
      data: res.data.data,
      success: true,
      count: res.data.count,
    }));
}

export async function apiPost<TResponse, TVariables>(args: {
  path: string;
  variables?: TVariables;
  headers?: Headers;
  signal?: AbortSignal;
}) {
  const { path, variables } = insertURLValues<TVariables>(
    args.path,
    args.variables,
  );

  const apiUrl = getBaseApiUrl() + path;
  const headers = getHeaders(args.headers);

  return axios
    .post<
      { data?: Maybe<TResponse>; message?: Maybe<string> },
      AxiosResponse<{ data?: Maybe<TResponse>; message?: Maybe<string> }>,
      TVariables
    >(apiUrl, variables, { headers, signal: args.signal })
    .then((res) => ({
      success: true,
      data: res.data.data,
      message: res.data.message,
    }));
}

export async function apiPut<TResponse, TVariables>(args: {
  path: string;
  variables?: TVariables;
  headers?: Headers;
}) {
  const { path, variables } = insertURLValues<TVariables>(
    args.path,
    args.variables,
  );

  const apiUrl = getBaseApiUrl() + path;
  const headers = getHeaders(args.headers);

  return axios
    .put<
      { data?: Maybe<TResponse>; message?: Maybe<string> },
      AxiosResponse<{ data?: Maybe<TResponse>; message?: Maybe<string> }>,
      TVariables
    >(apiUrl, variables, {
      headers,
    })
    .then((res) => ({
      success: true,
      data: res.data.data,
      message: res.data.message,
      status: res.status,
    }));
}

export async function apiPatch<TResponse, TVariables>(args: {
  path: string;
  variables?: TVariables;
  headers?: Headers;
}) {
  const { path, variables } = insertURLValues<TVariables>(
    args.path,
    args.variables,
  );

  const apiUrl = getBaseApiUrl() + path;
  const headers = getHeaders(args.headers);

  return axios
    .patch<
      { data?: Maybe<TResponse>; message?: Maybe<string> },
      AxiosResponse<{ data?: Maybe<TResponse>; message?: Maybe<string> }>,
      TVariables
    >(apiUrl, variables, { headers })
    .then((res) => ({
      success: true,
      data: res.data.data,
      message: res.data.message,
      status: res.status,
    }));
}

export async function apiDelete<TResponse, TVariables>(args: {
  path: string;
  variables?: TVariables;
  headers?: Headers;
}) {
  const { path, variables } = insertURLValues<TVariables>(
    args.path,
    args.variables,
  );

  const apiUrl = getBaseApiUrl() + path;
  const headers = getHeaders(args.headers);

  return axios
    .delete<
      { data?: Maybe<TResponse>; message?: Maybe<string> },
      AxiosResponse<{ data?: Maybe<TResponse>; message?: Maybe<string> }>,
      TVariables
    >(apiUrl, { headers, data: variables })
    .then((res) => ({
      success: true,
      data: res.data.data,
      message: res.data.message,
      status: res.status,
    }));
}

export function parseGet(val?: object) {
  if (!val) return "";
  return encodeURIComponent(JSON.stringify(val));
}

export function convertObjectToQueryParams(
  obj?: Record<string, any>,
  startOp = "?",
) {
  if (!obj) return "";
  const keys = Object.keys(obj);
  let op = startOp;
  return keys.reduce((acc, key) => {
    if (!obj[key]) return acc;
    const value = typeof obj[key] === "object" ? parseGet(obj[key]) : obj[key];
    const url = `${acc}${op}${key}=${value}`;
    op = "&";
    return url;
  }, "");
}

export function parseSearchParam<T>(value: string | null | undefined) {
  try {
    if (!value) return undefined;
    return JSON.parse(decodeURI(value)) as T;
  } catch (error) {
    return undefined;
  }
}

export function createURLSearchParams<
  T extends Array<[string, unknown] | undefined | readonly [string, unknown]>,
>(params: T): string {
  const searchParams = new URLSearchParams();
  params.forEach((param) => {
    if (typeof param === "undefined") return;
    const [key, value] = param;
    if (typeof value === "undefined") return;
    searchParams.append(key, String(value));
  });
  return Array.from(searchParams.entries()).length > 0
    ? `?${searchParams.toString()}`
    : "";
}

export function convertVariablesToQueryParams<TVariables>(
  variables?: TVariables,
) {
  if (Array.isArray(variables)) return createURLSearchParams(variables);
  const entries = Object.entries(variables ?? {});
  const formattedEntries = entries.map(
    ([key, value]) =>
      [
        key,
        typeof value === "string"
          ? value
          : typeof value === "object" && value !== null
            ? parseGet(value)
            : value,
      ] as const,
  );
  return createURLSearchParams(formattedEntries);
}

function insertURLValues<T>(url: string, inputs?: T) {
  let path = "";
  const variables = Object.assign({}, inputs) as T;
  url.split("/").forEach((segment) => {
    if (segment === "/" || !segment) return;

    if (!segment.includes("[")) {
      path += "/" + segment;
      return;
    }

    const paths = segment.replace("[", "").replace("]", "").split(".") as Array<
      keyof T
    >;
    const value = paths.reduce((a: any, key) => a[key], variables);
    path += "/" + String(value);

    let curObj: any = variables;
    const last = paths.pop() as keyof T;
    for (const part of paths) {
      curObj = curObj[part];
      if (!curObj) return;
    }
    delete curObj[last];
  });
  return { path, variables };
}

export function getHeaders(args?: Headers) {
  const headers: Record<string, string | number | boolean> = {};
  if (args?.token) headers.Authorization = `Bearer ${args.token}`;
  if (args?.["school-id"]) headers["school-id"] = args["school-id"];

  return headers;
}
