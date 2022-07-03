import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReadingListItem } from "../../api/types";

interface State {
  list: ReadingListItem[];
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
      { payload }: PayloadAction<ReadingListItem>
    ) => {
      const exists = state.list.some(item => item.id === payload.bookId)
      state.list = exists ? state.list : state.list.concat(payload);
    },
    markAsRead: (
      state: State,
      { payload }: PayloadAction<{ id: string }>
    ) => {
      state.list = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, endTime: Date.now() }
        }
        return item
      })
    },
    updateNote: (
      state: State,
      { payload }: PayloadAction<{ id: string, note: string }>
    ) => {
      state.list = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, note: payload.note }
        }
        return item
      })
    },
    removeFromRead: (
      state: State,
      { payload }: PayloadAction<{ id: string }>
    ) => {
      state.list = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, endTime: 0 }
        }
        return item
      })
    },
    removeBook: (
      state: State,
      { payload }: PayloadAction<{ id: string }>
    ) => {
      state.list = state.list.filter(item => item.bookId !== payload.id)
    },
  },
});

export default slice.reducer;
export const { addBook, markAsRead, removeFromRead, removeBook, updateNote, clear } = slice.actions;
