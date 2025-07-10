import axios from "axios";
import SHARED_CONSTANTS from "../constants";

export function getBaseApiUrl(): string {
  if (isDev())
    return (
      import.meta.env.VITE_APP_BASE_URL ?? SHARED_CONSTANTS.BASE_API_URL.STAGING
    );
  return SHARED_CONSTANTS.BASE_API_URL.PRODUCTION;
}

export function isDev(): boolean {
  const host = window.location.hostname;
  return import.meta.env.DEV || host.includes("staging");
}

/**
 * Returns an instance of axios that already contains the API token needed by the server
 * and also contains the base url for the api
 */
export async function getSecureAxiosInstance(baseUrl?: string) {
  return axios.create({
    baseURL: baseUrl ? baseUrl : getBaseApiUrl(),
  });
}
