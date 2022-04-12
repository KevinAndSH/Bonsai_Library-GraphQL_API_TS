import { groupBy } from "lodash"
import { Author, AuthorModel } from "./authors/author.model"
import { Book, BookModel } from "./books/book.model"
import { Publisher, PublisherModel } from "./publishers/publisher.model"

const groupAndSortById = (items, ids) => {
  const itemsById = groupBy(items, "_id")
  return ids.map((id: string) => itemsById[id] ?? [])
}

export const bookLoader = async (bookIDs): Promise<Book[]> => {
  const books: Book[] = await BookModel.where("_id").in([...bookIDs])
  return groupAndSortById(books, bookIDs)
}

export const authorLoader = async (authorIDs): Promise<Author[]> => {
  const authors: Author[] = await AuthorModel.where("_id").in([...authorIDs])
  return groupAndSortById(authors, authorIDs)
}

export const publisherLoader = async (publisherIDs): Promise<Publisher[]> => {
  const publishers: Publisher[] = await PublisherModel.where("_id").in([...publisherIDs])
  return groupAndSortById(publishers, publisherIDs)
}
