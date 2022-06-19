import Book from "../components/Book";
import { books } from "./DiscoverPage";

export default function ReadingListPage() {
  return (
    <div>
      <ul className="list-style-none grid px-2 gap-8">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
