import { IBook } from "../../api/types";
import { useGetter, useSetter } from "../hooks";
import { addBook, removeBook } from "./reducer";

export function useGetListItem(id: string) {
  const { list } = useGetter((state) => state.list);
  return list.find(book => book.id === id)
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