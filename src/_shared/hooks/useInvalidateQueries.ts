import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function useInvalidateQueries() {
  const client = useQueryClient();

  const invalidateQueries = useCallback(
    (queryKeys: string | string[]) => {
      if (Array.isArray(queryKeys)) {
        const promises = queryKeys.map((key) =>
          client.invalidateQueries({ queryKey: [key] }),
        );
        return Promise.all(promises);
      }

      return client.invalidateQueries({ queryKey: [queryKeys] });
    },
    [client],
  );

  return invalidateQueries;
}
