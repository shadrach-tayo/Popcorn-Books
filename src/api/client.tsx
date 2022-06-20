import { useCallback } from "react";

const fetchError = "Failed to fetch";

export function client(endpoint: string) {
  return window
    .fetch(endpoint)
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 400) return Promise.reject(data?.error?.message ?? fetchError);
      if (response.ok) return data;
      return Promise.reject(fetchError);
    })
    
}

export function useClient(endpoint: string) {
  return useCallback(() => client(endpoint), [endpoint]);
}
