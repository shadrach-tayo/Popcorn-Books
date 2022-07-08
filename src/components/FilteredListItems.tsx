import { ReactNode } from "react";
import { ReadingListItem } from "../api/types";
import { useGetList } from "../state/list/hooks";
import Book from "./Book";

export default function FilteredListItems(props: { predicate: (items: ReadingListItem) => boolean, noListItems: ReactNode, noFilteredListItems: ReactNode }) {
  const list = useGetList();
  const items = list.filter(props.predicate);
  if (!list.length) return <>{props.noListItems}</>

  if (!items.length) return <>{props.noFilteredListItems}</>

  return (
    <ul className="list-style-none grid px-2 gap-8">
      {items.map((item) => (
        <li key={item.id} aria-label={item.book.volumeInfo.title}>
          <Book key={item.id} book={item.book} />
        </li>
      ))}
    </ul>
  )
}