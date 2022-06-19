import { ReactNode } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IBook } from "../api/types";

export default function ActionButton({ book }: { book: IBook }) {
  // const listed = useListItem(book.id);
  const listed = false;
  return (
    <>
      {listed ? (
        <IconButton Icon={<FaMinusCircle />} />
      ) : (
        <IconButton Icon={<FaPlusCircle />} />
      )}
    </>
  );
}

function IconButton(props: {
  classes?: string;
  label?: string;
  Icon: ReactNode;
  onClick?: () => {};
}) {
  return (
    <button
      className={`border-2 border-mercury border-opacity-40 p-2 rounded-full ${props.classes ?? ""
        }`}
    >
      {props.Icon}
    </button>
  );
}
