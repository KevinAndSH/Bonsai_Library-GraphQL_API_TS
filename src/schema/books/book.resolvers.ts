import { Arg, Args, Authorized, FieldResolver, ID, Mutation, Query, Resolver, Root } from "type-graphql";
import { Author, AuthorModel } from "../authors/author.model";
import { Publisher, PublisherModel } from "../publishers/publisher.model";
import { UserRole } from "../users/user.model";
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

  @Authorized(UserRole.EDITOR)
  @Mutation(returns => Book)
  async registerBook(@Arg("newBookData") newBookData: RegisterBookInput): Promise<Book> {
    const newBook = new BookModel(newBookData)
    return await newBook.save().catch(err => { throw err })
  }

  @Authorized(UserRole.EDITOR)
  @Mutation(returns => Book)
  async updateBook(@Arg("bookData") bookData: UpdateBookInput): Promise<Book> {
    const id = bookData.id
    bookData.id = undefined
    return await BookModel.findByIdAndUpdate(id, bookData, { returnOriginal: false })
  }

  @Authorized(UserRole.EDITOR)
  @Mutation(returns => Boolean)
  async deleteBookById(@Arg("id", type => ID) id: string): Promise<boolean> {
    try {
      await BookModel.findByIdAndDelete(id)
      return true
    } catch (error) {
      console.error(error)
      throw error
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
