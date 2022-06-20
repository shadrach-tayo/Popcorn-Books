import { ReactNode } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IBook } from "../api/types";
import { useAddListItem, useGetListItem, useRemoveListItem } from "../state/list/hooks";

export default function ActionButton({ book }: { book: IBook }) {
  const readBook = useAddListItem();
  const removeBook = useRemoveListItem();
  const listItem = useGetListItem(book.id);

  const listed = !!listItem;
  return (
    <>
      {listed ? (
        <IconButton onClick={() => removeBook(book.id)} Icon={<FaMinusCircle />} />
      ) : (
          <IconButton onClick={() => readBook(book)} Icon={<FaPlusCircle />} />
      )}
    </>
  );
}

function IconButton(props: {
  classes?: string;
  label?: string;
  Icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => props?.onClick && props.onClick()}
      className={`border-2 border-mercury border-opacity-40 p-2 rounded-full ${props.classes ?? ""
        }`}
    >
      {props.Icon}
    </button>
  );
}
