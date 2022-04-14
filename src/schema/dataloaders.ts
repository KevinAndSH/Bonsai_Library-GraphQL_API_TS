import DataLoader from "dataloader"
import { Author, AuthorModel } from "./authors/author.model"
import { Book, BookModel } from "./books/book.model"
import { Publisher, PublisherModel } from "./publishers/publisher.model"

// const groupAndSortById = (items, ids) => {
//   const itemsById = groupBy(items, "_id")
//   return ids.map(id => itemsById[id] || Error("Not found :("))
// }

const groupAndSortById = (items, ids: string[]) => {
  const orderedItems = {}
  items.forEach(item => orderedItems[item.id] = item)
  return ids.map(id => orderedItems[id])
}

const getBooksByIDs = async (bookIDs: string[]): Promise<Book[]> => {
  const books: Book[] = await BookModel.where("_id").in([...bookIDs])
  return groupAndSortById(books, bookIDs)
}

const getAuthorsByIDs = async (authorIDs: string[]): Promise<Author[]> => {
  const authors: Author[] = await AuthorModel.where("_id").in([...authorIDs])
  return groupAndSortById(authors, authorIDs)
}

const getPublishersByIDs = async (publisherIDs: string[]): Promise<Publisher[]> => {
  const publishers: Publisher[] = await PublisherModel.where("_id").in([...publisherIDs])
  return groupAndSortById(publishers, publisherIDs)
}

export const getDataLoaders = (): Loaders => {
  return {
    bookLoader: new DataLoader(getBooksByIDs),
    authorLoader: new DataLoader(getAuthorsByIDs),
    publisherLoader: new DataLoader(getPublishersByIDs)
  }
}

export interface Loaders {
  bookLoader: DataLoader<string, Book>
  authorLoader: DataLoader<string, Author>
  publisherLoader: DataLoader<string, Publisher>
}
