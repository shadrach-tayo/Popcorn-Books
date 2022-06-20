import { useCallback } from "react";

export function client(endpoint: string) {
  return window
    .fetch(endpoint)
    .then(async (response) => {
      if (response.status > 200) return Promise.reject("An Error occured!!");
      const data = response.json();
      if (response.ok) return data;
      return Promise.reject(data);
    });
}

export function useClient(endpoint: string) {
  return useCallback(() => client(endpoint), [endpoint]);
}
