import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { queryClient } from "../api/books";
import Loader from "../components/Loader";
import store from "../state"
import { persistStore } from "redux-persist";

const persiststore = persistStore(store)

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persiststore}>
        <QueryClientProvider client={queryClient}>
          <Router>{children}</Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
