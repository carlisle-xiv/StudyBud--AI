export function getLocalForage() {
  return import("localforage").then(({ default: localforage }) => localforage);
}
