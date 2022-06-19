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


export interface IBooks {
  kind: string;
  totalItems: number;
  items: IBook[];
}