export type Maybe<T> = T | undefined | null;
export type ApiRequestResult<TData = any> = {
  error?: number | boolean;
  success?: boolean;
  data?: Maybe<TData>;
  status?: number | null;
  message?: Maybe<string>;
  errorData?: any;
  count?: Maybe<number>;
};
