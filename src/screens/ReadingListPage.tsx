import { booksPlaceHolder } from "../api/books";
import Book from "../components/Book";

export default function ReadingListPage() {
  return (
    <div>
      <ul className="list-style-none grid px-2 gap-8">
        {booksPlaceHolder.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
