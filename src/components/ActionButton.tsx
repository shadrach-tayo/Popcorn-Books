import { ReactNode } from "react";
import { FaCheckCircle, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IBook } from "../api/types";
import { useAddListItem, useGetListItem, useMarkAsRead, useRemoveFromRead, useRemoveListItem } from "../state/list/hooks";

export default function ActionButton({ book }: { book: IBook }) {
  const addToList = useAddListItem();
  const removeBook = useRemoveListItem();
  const listItem = useGetListItem(book.id);
  const markAsRead = useMarkAsRead();
  const removeFromRead = useRemoveFromRead();

  const listed = !!listItem;
  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      {!listed && <IconButton onClick={() => addToList(book)} Icon={<FaPlusCircle />} />}
      {listed && listItem?.endTime === 0 && <IconButton onClick={() => markAsRead(listItem.id)} Icon={<FaCheckCircle />} />}
      {listed && listItem?.endTime !== 0 && <IconButton onClick={() => removeFromRead(listItem?.id)} Icon={<FaCheckCircle />} />}
      {listed  && <IconButton onClick={() => removeBook(book.id)} Icon={<FaMinusCircle />} />}
    </div>
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
