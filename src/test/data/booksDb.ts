import books from "./books.json";

export function getAllBooks() {
  return books;
}

export function getRandomBook() {
  return books[Math.floor(Math.random() * books.length)];
}

export function queryBooks(query: string) {
  const match = books.filter(book => book.volumeInfo.title.includes(query) || book.volumeInfo.description?.includes(query) || book.searchInfo?.textSnippet.includes(query) || book.volumeInfo.subtitle?.includes(query))
  const items = match.slice(0, 5);
  return {
    kind: "books#volumes",
    totalItems: items.length,
    items: items
  }
}

export function queryBook(id: string) {
  const book = books.find(book => book.id === id)
  return book;
}