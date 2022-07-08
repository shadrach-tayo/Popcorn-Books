import { SyntheticEvent } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { IoIosClose, IoIosCloseCircleOutline } from "react-icons/io";
import { useBookSearch } from "../api/books";
import { SEARCH_KEY } from "../api/constants";
import Book from "../components/Book";
import Loader from "../components/Loader";
import useDebouncer from "../hooks/useDebounce";
import useLocalStorageState from "../hooks/useLocalstorage";

export default function DiscoverPage() {
  const [query, setQuery] = useLocalStorageState(SEARCH_KEY, "");
  const [queryKey] = useDebouncer(query, 500);
  const { data, isFetching, isError, isSuccess } = useBookSearch(queryKey);

  const clearSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    query && setQuery("");
  }

  return (
    <div className="mx-5 md:mx-0">
      <div className="flex items-center justify-between m-0 md:ml-3 md:mr-2 mb-8 bg-mercury bg-opacity-40 p-2 hover:shadow-card">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="search"
          name="search"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Search books..."
        />
        <button
          onClick={clearSearch}
          disabled={isFetching}
          className="bg-transparent w-22"
        >
          {isFetching ? (
            <FaSpinner className="animate-spin" />
          ) : isError ? (
            <IoIosClose />
          ) : query ? (
            <IoIosCloseCircleOutline />
          ) : (
            <FaSearch />
          )}
        </button>
      </div>
      {isFetching && <Loader />}
      {isSuccess && data?.length === 0 && <h2 className="text-center">No search results found!!!</h2>}
      {!isFetching && !data && (
        <h2 className="text-center">
          Welcome to the Library, type in your search to continue...
        </h2>
      )}
      {query && !isFetching && !isError && (
        <ul className="list-style-none grid px-2 gap-y-8">
          {data?.map((book) => (
            <li key={book.id} aria-label={book.volumeInfo.title}>
              <Book key={book.id} book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
