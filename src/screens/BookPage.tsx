import { useParams } from "react-router";
import { bookPlaceholder, booksPlaceHolder, useBook } from "../api/books";
import ActionButton from "../components/ActionButton";

export default function BookPage() {
  const params = useParams<{ bookId: string }>();
  const {data = bookPlaceholder } = useBook(params.bookId!);
  const book = data.volumeInfo;
 
  return (
    <div className="relative mt-5 md:mt-0 md:ml-4 p-2 rounded-lg hover:shadow-card">
      <div className="grid grid-cols-books-sm md:grid-cols-layout gap-2">
        <div className="w-100 max-w-140">
          <img alt={`${book.title} thumbnail`} src={book.imageLinks?.thumbnail} />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-cornflower capitalize">{book.title}</h2>
          <p className="italic font-semibold capitalize">{book?.authors?.[0]}</p>
          <p className="capitalize text-sm">{book?.publisher}</p>
          <p className="text-sm overflow-hidden">
            {book?.description ?? ''}
          </p>
        </div>
      </div>
      <div className="absolute top-3 right-3 md:top-0 md:right-0 md:-mr-5 md:-mt-5">
        <ActionButton book={booksPlaceHolder[0]} />
      </div>
    </div>
  );
}
