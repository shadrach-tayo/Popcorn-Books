export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    publisher: string;
    authors: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export interface ReadingListItem {
  id: string;
  startTime: number;
  endTime: number;
  bookId: string;
  book: IBook;
}

export interface IBooks {
  kind: string;
  totalItems: number;
  items: IBook[];
}