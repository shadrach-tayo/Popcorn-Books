import { IBook } from "../../api/types";
import { useGetter, useSetter } from "../hooks";
import { addBook, clear, removeBook } from "./reducer";

export function useGetListItem(id: string) {
  const { list } = useGetter((state) => state.list);
  return list.find(book => book.id === id)
}

export function useGetList() {
  const { list } = useGetter((state) => state.list);
  return list
}

export function useAddListItem() {
  const dispatch = useSetter();
  const add = (book: IBook) => {
    dispatch(addBook({ book }))
  }

  return add;
}

export function useRemoveListItem() {
  const dispatch = useSetter();
  const remove = (id: string) => {
    dispatch(removeBook({ id }))
  }

  return remove;
}

export function useClearReadingList() {
  const dispatch = useSetter();
  const reset = () => {
    dispatch(clear())
  }

  return reset;
}