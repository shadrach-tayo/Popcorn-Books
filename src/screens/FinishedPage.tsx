import { Link } from "react-router-dom";
import { ReadingListItem } from "../api/types";
import FilteredListItems from "../components/FilteredListItems";

export default function FinishedPage() {
  const filter = (item: ReadingListItem) => Boolean(item.endTime);

  function PlaceHolder() {
    return (
      <div className="flex flex-col items-center gap-y-2 w-full">
        <h2 className="text-center">You have not finished any book yet!!!</h2>
        <Link to="../list" className="underline">
          Check reading lists 📚
        </Link>
        <Link to="../discover" className="underline">
          Discover books to read now 🔎
        </Link>
      </div>
    )
  }
  return (
    <div className="p-3">
      <FilteredListItems predicate={filter} noFilteredListItems={<PlaceHolder />} noListItems={
        <PlaceHolder />
      } />
    </div>
  );
}
