import { SchoolListResponse } from "@/Types/Types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseSchoolListResponse(json: any): SchoolListResponse {
  return {
    count: json.count,
    data: json.data.map((item: any) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    })),
  };
}
