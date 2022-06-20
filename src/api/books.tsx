import { useQuery, QueryClient } from "react-query";
import { client } from "./client";
import { APIKEY, API_URL } from "./constants";
import { IBook } from "./types";

export const queryClient = new QueryClient();

enum tags {
  book = "book",
  bookSearch = "bookSearch",
}

export const bookPlaceholder: IBook = {
  id: "1",
  volumeInfo: {
    title: "moremi",
    subtitle: "actionista",
    publisher: "AA limited",
    authors: ["segun oke", "victor Mba"],
    description:
      "Kayla Redmond was looking forward to her new job as a high school teacher. She was going to focus on her career. Relationships were out of the question. As long as she managed to have a little harmless fun on the weekends, she was content. But when she’s given the classroom next to Melissa Martin, a woman sexy as sin, she finds herself immediately interested. Just one problem… Melissa’s got a boyfriend, Glen. It could never work. Falling for a straight girl is a big no-no. But when Melissa comes to Kayla for sexual advice, everything changes. Melissa wants Kayla to be her sexual mentor… to teach her what to do in the bedroom. Kayla never expects that in teaching the inexperienced Melissa, she would give the gorgeous woman a sexual awakening… Kayla never expects to find that her desire for Melissa is not as hopeless as she once thought… And Kayla never expects to be pulled into a love triangle full of conflict that might lose her Melissa forever… …right as she’s beginning to fall in love.",
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=__g9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
  },
};

export const booksPlaceHolder: IBook[] = Array.from({ length: 5 }).map(
  (v, i) => ({ ...bookPlaceholder, id: `${i}` })
);

export function useBook(bookId: string) {
  const result = useQuery<IBook, any>({
    queryKey: [tags.book, { bookId }],
    queryFn: () => client(`${API_URL}/${bookId}?key=${APIKEY}`),
    placeholderData: bookPlaceholder,
    enabled: !!bookId,
  });
  const cached = queryClient.getQueryData([tags.book, { bookId }]) as IBook;
  return { ...result, data: result.data ?? cached };
}

function getSearchConfig(query: string) {
  return {
    queryKey: [tags.bookSearch, { query }],
    queryFn: () =>
      client(`${API_URL}?key=${APIKEY}&q=${query}&maxResults=5`).then(
        (data) => data?.items ?? []
      ),
    enabled: !!query,
    retry: 3,
    useErrorBoundary: true,
    onSuccess(data: IBook[]) {
      data.forEach((book) =>
        queryClient.setQueryData([tags.book, { bookId: book.id }], book)
      );
    },
    onError(error: any) {
      // console.log("error occured: ", error)
      // Todo: display error toast
    },
  };
}

export function useBookSearch(query: string) {
  const result = useQuery<IBook[], any>(getSearchConfig(query));
  return { ...result, data: result.data };
}
