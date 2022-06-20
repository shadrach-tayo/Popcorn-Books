import Book from "../components/Book";
import { useGetList } from "../state/list/hooks";

export default function ReadingListPage() {
  const list = useGetList();
  return (
    <div>
      <ul className="list-style-none grid px-2 gap-8">
        {list.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
