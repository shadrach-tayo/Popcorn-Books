import { useParams } from "react-router";
import ActionButton from "../components/ActionButton";
import { books } from "./DiscoverPage";

export default function BookPage() {
  const params = useParams<{ id: string }>();
  console.log(params);
  // const book = useBook(params.id);
  const {
    volumeInfo: { title, publisher, authors, imageLinks, description },
  } = books[0];
  return (
    <div className="relative mt-5 md:mt-0 md:ml-4 p-2 rounded-lg hover:shadow-card">
      <div className="grid grid-cols-books-sm md:grid-cols-layout gap-2">
        <div className="w-100 max-w-140">
          <img alt={`${title} thumbnail`} src={imageLinks?.thumbnail} />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-cornflower capitalize">{title}</h2>
          <p className="italic font-semibold capitalize">{authors[0]}</p>
          <p className="capitalize text-sm">{publisher}</p>
          <p className="text-sm overflow-hidden">
            {description?.substring(0, 500)}...
          </p>
        </div>
      </div>
      <div className="absolute top-3 right-3 md:top-0 md:right-0 md:-mr-5 md:-mt-5">
        <ActionButton book={books[0]} />
      </div>
    </div>
  );
}
