export function parseStringifiedNumber(num: any, defaultValue?: any) {
  if (typeof num === "number") return num;
  if (typeof num === "object" && num === null) return null;
  const value = String(num).replace(/[^0-9.-]/g, "");
  if (value === "0-") return "-";
  if (value.endsWith(".") || value.endsWith("-")) return value;
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}
