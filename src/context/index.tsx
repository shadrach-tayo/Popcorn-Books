import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "../api/books";
import store from "../state"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
    </Provider>
  );
}
