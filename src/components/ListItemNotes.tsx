// import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ReadingListItem } from "../api/types";
import useDebouncer from "../hooks/useDebounce";
import { useUpdateNote } from "../state/list/hooks";

export default function ListItemNotes({ listItem }: { listItem: ReadingListItem }) {
  const [note, setNote] = useState(listItem.note ?? "")
  const updateNote = useUpdateNote();
  const [debouncedNote] = useDebouncer(note, 300);

  useEffect(() => {
    updateNote(listItem.id, debouncedNote);
  }, [debouncedNote, listItem.id, updateNote]);

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center mb-1">
        <h1>Notes </h1>
        {/* <FaSpinner className="animate-spin" /> */}
      </div>
      <textarea value={note} onChange={e => setNote(e.target.value)} className="w-full h-140 p-2 border-2 border-black bg-sand focus:outline-none" />
    </div>
  )
}