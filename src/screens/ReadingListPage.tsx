import { Link } from "react-router-dom";
import { ReadingListItem } from "../api/types";
import FilteredListItems from "../components/FilteredListItems";

export default function ReadingListPage() {
  const filter = (item: ReadingListItem) => !item.endTime;

  function PlaceHolder() {
    return (
      <div className="flex flex-col items-center gap-y-2 w-full">
        <h2 className="text-center">Your reading List is empty</h2>
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
