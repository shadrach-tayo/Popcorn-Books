import { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { IoIosClose, IoIosCloseCircleOutline } from "react-icons/io";
import { useBookSearch } from "../api/books";
import Book from "../components/Book";
import useDebouncer from "../hooks/useDebounce";

export default function DiscoverPage() {
  const [query, setQuery] = useState('');
  const [queryKey] = useDebouncer(query, 500);
  const { data, isFetching, isError} = useBookSearch(queryKey);
  
  const clearSearch = () => query && setQuery('');

  return (
    <div className="mx-5 md:mx-0">
      <form className="flex items-center justify-between m-0 md:ml-3 md:mr-2 mb-8 bg-mercury bg-opacity-40 p-2 hover:shadow-card">
        <input value={query} onChange={e => setQuery(e.target.value)} type="text" className="w-full bg-transparent focus:outline-none" placeholder="Search books..."/>
        <button onClick={clearSearch} className="bg-transparent w-22">
          {isFetching ? <FaSpinner className="animate-spin" /> : isError ? <IoIosClose /> : query ? <IoIosCloseCircleOutline /> : <FaSearch />}
        </button>
      </form>
      {/* {isSuccess && data?.items } */}
      <ul className="list-style-none grid px-2 gap-y-8">
        {data?.map(book => <Book key={book.id} book={book} />)}
      </ul>
    </div>
  );
}
