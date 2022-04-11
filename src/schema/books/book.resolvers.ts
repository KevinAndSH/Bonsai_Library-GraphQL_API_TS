import { Arg, Args, FieldResolver, ID, Mutation, Query, Resolver, Root } from "type-graphql";
import { Author, AuthorModel } from "../authors/author.model";
import { Publisher, PublisherModel } from "../publishers/publisher.model";
import { BookFilter, GetBooksArgs } from "./book.args";
import { RegisterBookInput, UpdateBookInput } from "./book.inputs";
import { Book, BookModel } from "./book.model";

@Resolver(of => Book)
export class BookResolver {
  @Query(returns => Book)
  async book(@Arg("id", type => ID) id: string): Promise<Book> {
    return await BookModel.findById(id)
  }

  @Query(returns => [Book])
  async books(
    @Args()
    { page, amount, year, title, authorID, publisherID, orderBy, orderType }: GetBooksArgs
  ): Promise<Book[]> {
    const entriesToShow = amount ?? 10
    const entriesToSkip = entriesToShow * (page - 1)

    const filter: BookFilter = {}
    if (year) filter.publicationYear = year
    if (title) filter.title = new RegExp(title, "i")
    if (authorID) filter.authorIDs = { $in: [authorID] }
    if (publisherID) filter.publisherID = publisherID

    return BookModel
      .find(filter)
      .sort([[orderBy, orderType]])
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }

  @Mutation()
  async registerBook(@Arg("newBookData") newBookData: RegisterBookInput) {
    const newBook = new BookModel(newBookData)
    return await newBook.save().catch(console.error)
  }

  @Mutation()
  async updateBook(@Arg("bookData") bookData: UpdateBookInput) {
    const bookToEdit = BookModel.findById(bookData.id)
    for (const key in bookData) {
      if (key === "id") continue
      if (!bookData[key]) continue
      bookToEdit[key] = bookData[key]
    }
    return await bookToEdit.save().catch(console.error)
  }

  @Mutation()
  async deleteBookById(@Arg("id", type => ID) id: string) {
    try {
      BookModel.deleteOne({ _id: id })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  @FieldResolver()
  async publisher(@Root() book: Book): Promise<Publisher> {
    return await PublisherModel.findById(book.publisherID)
  }

  @FieldResolver()
  async authors(@Root() book: Book): Promise<Author[]> {
    return await AuthorModel.where("_id").in([...book.authorIDs])
  }
}
