import { IoIosCalendar } from 'react-icons/io'
import { useParams } from 'react-router'
import { useBook } from '../api/books'
import { ReadingListItem } from '../api/types'
import ActionButton from '../components/ActionButton'
import { ErrorMessage } from '../components/lib'
import ListItemNotes from '../components/ListItemNotes'
import Loader from '../components/Loader'
import { formatDate } from '../helper'
import { useGetListItem } from '../state/list/hooks'

export default function BookPage() {
  const params = useParams<{ bookId: string }>()
  const { data, isFetching, isError, isSuccess, error } = useBook(params.bookId!)
  const book = data?.volumeInfo
  const listItem = useGetListItem(params.bookId ?? '')
  if (isError) return <ErrorMessage error={error} />

  if (isFetching && !data) return <Loader />

  if (isSuccess && !data)
    return (
      <h2 className="text-center">Book with id {params.bookId} not found!!!</h2>
    )

  return (
    <div className="mt-5 md:mt-0 md:ml-4 p-2">
      <div className="relative rounded-lg hover:shadow-card">
        <div className="grid grid-cols-books-sm md:grid-cols-layout gap-2">
          <div className="w-100 max-w-140">
            <img
              alt={`${book?.title} thumbnail`}
              src={book?.imageLinks?.thumbnail}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="font-bold text-cornflower capitalize">
              {book?.title}
            </h2>
            <p className="italic font-semibold capitalize">
              {book?.authors?.[0]}
            </p>
            <p className="capitalize text-sm">{book?.publisher}</p>
           
            {listItem && <ListItemTime listItem={listItem} />}
            <p className="text-sm overflow-hidden">{book?.description ?? ''}</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 md:top-0 md:right-0 md:-mr-5 md:-mt-5 h-full">
          {data && <ActionButton book={data} />}
        </div>
      </div>
      {listItem && <ListItemNotes listItem={listItem} />}
    </div>
  )
}

function ListItemTime({ listItem }: { listItem: ReadingListItem }) {
  const label = listItem.endTime ? 'start and end date' : 'start date';

  return <div className="flex items-center gap-2" aria-label={label}>
    <IoIosCalendar className="inline" />{' '}
    {formatDate(listItem.startTime)}
    {listItem.endTime ? `- ${formatDate(listItem.endTime)}` : ""}
  </div>
}