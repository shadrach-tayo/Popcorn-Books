import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../api/types";

interface State {
  list: IBook[];
}

const initialState: State = {
  list: [],
};

const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    clear: () => initialState,
    addBook: (
      state: State,
      { payload }: PayloadAction<{book: IBook }>
    ) => {
      const exists = state.list.some(item => item.id === payload.book.id)
      state.list = exists ? state.list : state.list.concat(payload.book);
    },
    removeBook: (
      state: State,
      { payload }: PayloadAction<{ id: string }>
    ) => {
       state.list = state.list.filter(book => book.id !== payload.id)
    },
  },
});

export default slice.reducer;
export const { addBook, removeBook, clear } = slice.actions;
