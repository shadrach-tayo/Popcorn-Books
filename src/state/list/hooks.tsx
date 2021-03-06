import { useMemo } from "react";
import { IBook } from "../../api/types";
import { useGetter, useSetter } from "../hooks";
import { addBook, clear, markAsRead, removeBook, removeFromRead, updateNote } from "./reducer";

export function useGetListItem(id: string) {
  const { list } = useGetter((state) => state.list);
  return list.find(item => item.bookId === id)
}

export function useGetList() {
  const { list } = useGetter((state) => state.list);
  return list
}

export function useAddListItem() {
  const dispatch = useSetter();
  return (book: IBook) => {
    dispatch(addBook({ book, id: book.id, bookId: book.id, startTime: Date.now(), endTime: 0, note: "" }))
  }
}

export function useUpdateNote() {
  const dispatch = useSetter();
  return useMemo(() => (id: string, note: string) => {
    dispatch(updateNote({ id, note }))
  }, [dispatch])
}

export function useMarkAsRead() {
  const dispatch = useSetter();
  return (id: string) => {
    dispatch(markAsRead({ id }))
  }
}

export function useRemoveFromRead() {
  const dispatch = useSetter();
  return (id: string) => {
    dispatch(removeFromRead({ id }))
  }
}

export function useRemoveListItem() {
  const dispatch = useSetter();
  return (id: string) => {
    dispatch(removeBook({ id }))
  }
}

export function useClearReadingList() {
  const dispatch = useSetter();
  return () => {
    dispatch(clear())
  }
}