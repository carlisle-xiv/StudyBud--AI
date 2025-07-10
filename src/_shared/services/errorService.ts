import { AxiosError } from "axios";
import { IRequestOptions } from "../@types";
import GLOBAL_ERRORS from "../errors";

import { toast } from "sonner";
export interface ServerErrorResponse<TVariables = never> {
  message: string;
  date: string;
  httpStatusCode: number;
  meta: TVariables extends never ? string : { data?: TVariables };
}

interface ApiRequestError<T> {
  error: number;
  errorData?: T;
  message?: string;
}
/**
 * In most cases, errors that occur when communicating
 * with the API are handled in the same way,
 * this utility function can be used for that.
 */
export function processErrorResponse<T = unknown>(
  error: T,
  options: IRequestOptions = {},
): ApiRequestError<T> | null {
  if (!error) return null;

  const { useServerErrorMsg, suppressErrors, fixedErrorMessage } = options;
  let { customErrors = GLOBAL_ERRORS } = options;

  /**
   * In the custom error object that is passed to this function the key **1000** has a special meaning
   * if it is available, then it means that apart from the other errors defined in the object (if any)
   * all other error codes should display the error message dictated by 1000's value.
   * Hence if its present, then we don't merge custom errors with the shared error object
   */
  if (customErrors) {
    customErrors = customErrors[1000]
      ? customErrors
      : { ...GLOBAL_ERRORS, ...customErrors };
  }

  if (!(error instanceof AxiosError)) return null;

  /**
   * if for whatever reason, the error thrown has no status code, we use 1000
   */
  let errorStatus = error?.response?.status || 1000;
  if (useServerErrorMsg && error?.response?.data?.message) {
    toast.error(error.response.data.message ?? customErrors[errorStatus]);
  } else {
    if (error.message && error.message.indexOf("Network Error") !== -1)
      errorStatus = 999;
    if (!suppressErrors) {
      /**
       * The last bit, customErrors[1000], will make sure that if a status code
       * for which we have no defined error is thrown, we still get to show a generic message
       */
      toast.error(
        fixedErrorMessage || customErrors[errorStatus] || customErrors[1000],
      );
    }
  }

  const meta = error.response?.data?.meta;

  const errorData = (typeof meta === "string" ? meta : meta?.data) as any;

  return {
    error: errorStatus,
    errorData,
    message: error.response?.data?.message ?? error.message,
  }; // we don't really need to return the status, but some special component might need it
}
