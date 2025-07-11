import { OperationMode } from "@/_shared/@types";

export function getOperationMode(): OperationMode {
  const host = window.location.hostname;
  if (host.includes("localhost")) {
    return "development";
  }
  if (host.includes("staging")) {
    return "staging";
  }
  return "production";
}
