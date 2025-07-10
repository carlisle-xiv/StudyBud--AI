export interface StatusBasedError {
  [index: number]: string;
}

export interface IRequestOptions {
  fixedErrorMessage?: string;
  customErrors?: StatusBasedError;
  suppressErrors?: boolean;
  useServerErrorMsg?: boolean;
  returnDataExpected?: boolean;
}

export type tFunctionType =
  | "view"
  | "edit"
  | "delete"
  | "archive"
  | "export"
  | "add";

export type OperationMode = "development" | "staging" | "production";
