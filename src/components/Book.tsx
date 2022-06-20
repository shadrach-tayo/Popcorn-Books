import { Link } from "react-router-dom";
import { IBook } from "../api/types";
import ActionButton from "./ActionButton";
// TODO: ADD fallback image for thumbnails
export default function Book({ book }: { book: IBook }) {
  const {
    id,
    volumeInfo: { title, publisher, description, authors = [], imageLinks },
  } = book;
  return (
    <div className="relative border-2 border-mercury border-opacity-40 p-2 rounded-lg hover:shadow-card">
      <Link
        to={`../books/${id}`}
        className="grid grid-cols-books-sm md:grid-cols-layout gap-2 max-h-250 overflow-hidden"
      >
        <div className="w-100 max-w-100 md:w-140 max-w-140">
          <img alt={`${title} thumbnail`} src={imageLinks?.thumbnail} />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-cornflower capitalize">{title}</h2>
          <p className="italic font-semibold capitalize">{authors[0]}</p>
          <p className="capitalize text-sm">{publisher}</p>
          <div className="h-28 overflow-hidden">
            <p className="text-sm h-140 overflow-hidden">
              {description?.substring(0, 300)}...
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute top-3 right-3 md:top-0 md:right-0 md:-mr-5 md:-mt-5">
        <ActionButton book={book} />
      </div>
    </div>
  );
}
