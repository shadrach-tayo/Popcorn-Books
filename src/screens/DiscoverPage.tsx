import { FaSearch } from "react-icons/fa";
import { IBook } from "../api/types";
import Book from "../components/Book";

export default function DiscoverPage() {
  return (
    <div className="mx-5 md:mx-0">
      <form className="flex items-center justify-between m-0 md:ml-3 md:mr-2 mb-8 bg-mercury bg-opacity-40 p-2 hover:shadow-card">
        <input type="text" required  className="w-full bg-transparent focus:outline-none" placeholder="Search books..."/>
        <button type="submit" className="bg-transparent p-2 w-22">
          <FaSearch />
        </button>
      </form>
      <ul className="list-style-none grid px-2 gap-y-8">
        {books.map(book => <Book key={book.id} book={book} />)}
      </ul>
    </div>
  );
}


export const books: IBook[] = [
  {
    id: "1",
    volumeInfo: {
      title: "moremi",
      subtitle: "actionista",
      publisher: "AA limited",
      authors: ["segun oke", "victor Mba"],
      description: "Kayla Redmond was looking forward to her new job as a high school teacher. She was going to focus on her career. Relationships were out of the question. As long as she managed to have a little harmless fun on the weekends, she was content. But when she’s given the classroom next to Melissa Martin, a woman sexy as sin, she finds herself immediately interested. Just one problem… Melissa’s got a boyfriend, Glen. It could never work. Falling for a straight girl is a big no-no. But when Melissa comes to Kayla for sexual advice, everything changes. Melissa wants Kayla to be her sexual mentor… to teach her what to do in the bedroom. Kayla never expects that in teaching the inexperienced Melissa, she would give the gorgeous woman a sexual awakening… Kayla never expects to find that her desire for Melissa is not as hopeless as she once thought… And Kayla never expects to be pulled into a love triangle full of conflict that might lose her Melissa forever… …right as she’s beginning to fall in love.",
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=__g9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    },
  },
  {
    id: "2",
    volumeInfo: {
      title: "Lover man",
      subtitle: "actionista",
      publisher: "AA limited",
      authors: ["segun oke", "victor Mba"],
      description: "Kayla Redmond was looking forward to her new job as a high school teacher. She was going to focus on her career. Relationships were out of the question. As long as she managed to have a little harmless fun on the weekends, she was content. But when she’s given the classroom next to Melissa Martin, a woman sexy as sin, she finds herself immediately interested. Just one problem… Melissa’s got a boyfriend, Glen. It could never work. Falling for a straight girl is a big no-no. But when Melissa comes to Kayla for sexual advice, everything changes. Melissa wants Kayla to be her sexual mentor… to teach her what to do in the bedroom. Kayla never expects that in teaching the inexperienced Melissa, she would give the gorgeous woman a sexual awakening… Kayla never expects to find that her desire for Melissa is not as hopeless as she once thought… And Kayla never expects to be pulled into a love triangle full of conflict that might lose her Melissa forever… …right as she’s beginning to fall in love.",
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=__g9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    },
  },
  {
    id: "3",
    volumeInfo: {
      title: "Death of superman",
      subtitle: "actionista",
      publisher: "AA limited",
      authors: ["segun oke", "victor Mba"],
      description: "Kayla Redmond was looking forward to her new job as a high school teacher. She was going to focus on her career. Relationships were out of the question. As long as she managed to have a little harmless fun on the weekends, she was content. But when she’s given the classroom next to Melissa Martin, a woman sexy as sin, she finds herself immediately interested. Just one problem… Melissa’s got a boyfriend, Glen. It could never work. Falling for a straight girl is a big no-no. But when Melissa comes to Kayla for sexual advice, everything changes. Melissa wants Kayla to be her sexual mentor… to teach her what to do in the bedroom. Kayla never expects that in teaching the inexperienced Melissa, she would give the gorgeous woman a sexual awakening… Kayla never expects to find that her desire for Melissa is not as hopeless as she once thought… And Kayla never expects to be pulled into a love triangle full of conflict that might lose her Melissa forever… …right as she’s beginning to fall in love.",
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=__g9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    },
  },
];