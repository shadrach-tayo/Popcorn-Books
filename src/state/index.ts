import { configureStore } from "@reduxjs/toolkit";
import list from "./list/reducer";

const store = configureStore({
  reducer: {
    list,
  },
  middleware: (_getDefaultMiddleware: any) => [],
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
