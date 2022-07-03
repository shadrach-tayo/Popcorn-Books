import { Link } from "react-router-dom";
import Book from "../components/Book";
import { useGetList } from "../state/list/hooks";

export default function ReadingListPage() {
  const items = useGetList();
  return (
    <div>
      {items?.length === 0 && (
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-center">Your reading List is empty</h2>
          <Link to="../discover" className="underline">
            Discover books to read now 😊
          </Link>
        </div>
      )}
      <ul className="list-style-none grid px-2 gap-8">
        {items.map((item) => (
          <Book key={item.id} book={item.book} />
        ))}
      </ul>
    </div>
  );
}
