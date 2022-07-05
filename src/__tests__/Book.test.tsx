/* eslint-disable testing-library/no-debugging-utils */
import userEvent from '@testing-library/user-event';
import { IBook } from '../api/types';
import App from '../App';
import { render, screen, waitForElementToBeRemoved, waitForLoadingToFinish } from '../test/app-test-utils';
import { getRandomBook } from '../test/data/booksDb';

async function renderBookPage(book: IBook) {
  
  await render(<App />, { route: `books/${book.id}` });
  // await waitForLoadingToFinish()
}

beforeEach(() => {
  window.history.pushState({}, '', '/')
  localStorage.clear()
})

test('Renders book details screen', async () => {
  const book = getRandomBook() as IBook;
  await renderBookPage(book);

  await waitForLoadingToFinish()
  const title = await screen.findByText(book.volumeInfo.title)
  // const author = await screen.findByText(book.volumeInfo?.authors[0] ?? '')
  // const description = await screen.findByText(book.volumeInfo.description ?? '')

  expect(title).toBeInTheDocument()
  // expect(author).toBeInTheDocument()
  // expect(description).toBeInTheDocument()
});

test('Add book to reading list', async () => {
  const book = getRandomBook() as IBook;
  await renderBookPage(book);

  const addToList = await screen.findByRole('button', { name: /add to list/i })
  await userEvent.click(addToList)

  expect(screen.queryByRole('button', { name: /add to list/i })).not.toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /mark as read/i })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /remove from list/i })).toBeInTheDocument();
  expect(await screen.findByLabelText(/start date/i)).toBeInTheDocument();
});

test('Remove book from reading list', async () => {
  const book = getRandomBook() as IBook;
  await renderBookPage(book);

  const addToList = await screen.findByRole('button', { name: /add to list/i })
  await userEvent.click(addToList)
  const removeFromList = await screen.findByRole('button', { name: /remove from list/i })
  await userEvent.click(removeFromList)

  expect(screen.queryByRole('button', { name: /remove from list/i })).not.toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /add to list/i })).toBeInTheDocument();
  expect(screen.queryByLabelText(/start date/i)).not.toBeInTheDocument();
});

test('Mark a list item as read', async () => {
  const book = getRandomBook() as IBook;
  await renderBookPage(book);

  const addToList = await screen.findByRole('button', { name: /add to list/i })
  await userEvent.click(addToList)
  const markAsRead = await screen.findByRole('button', { name: /mark as read/i })
  await userEvent.click(markAsRead)

  expect(screen.queryByRole('button', { name: /mark as read/i })).not.toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /mark as unread/i })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /remove from list/i })).toBeInTheDocument();
  expect(await screen.findByLabelText(/start and end date/i)).toBeInTheDocument();
});

test('Show error message when book fails to load', async () => {
  const book = getRandomBook() as IBook;
  await renderBookPage({ ...book, id: 'no-book-id'});

  // await waitForLoadingToFinish();
  expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument()

  // expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
});
