import { DocumentType } from "@typegoose/typegoose";
import { Arg, Args, Authorized, Ctx, FieldResolver, ID, Mutation, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "../../context";
import { Author } from "../authors/author.model";
import { Publisher } from "../publishers/publisher.model";
import { UserRole } from "../users/user.model";
import { BookFilter, GetBooksArgs } from "./book.args";
import { RegisterBookInput, UpdateBookInput } from "./book.inputs";
import { Book, BookModel } from "./book.model";
import { addBookIdToAuthors, removeBookIdFromAuthors, updateAuthors } from "./updateAuthors";
import { addBookIdToPublisher, removeBookIdFromPublisher, updatePublishers } from "./updatePublishers";

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
  @Mutation(returns => Book, { description: "Save a new book, and get its saved data back" })
  async registerBook(@Arg("newBookData") newBookData: RegisterBookInput): Promise<Book> {
    try {
      const newBook = new BookModel(newBookData)
      await newBook.save()
      await Promise.all([
        await addBookIdToAuthors(newBook.id, newBook.authorIDs),
        await addBookIdToPublisher(newBook.id, newBook.publisherID)
      ])
      return newBook
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Authorized(UserRole.EDITOR)
  @Mutation(returns => Book, { description: "Updates data for a book with the specified ID, returns the book with the updated data" })
  async updateBook(
    @Arg("id", type => ID) id: string,
    @Arg("bookData") bookData: UpdateBookInput
    ): Promise<Book> {
    try {
      const bookToEdit = await BookModel.findById(id)
      await Promise.all([
        await updateAuthors(id, bookToEdit.authorIDs, bookData.authorIDs),
        await updatePublishers(id, bookToEdit.publisherID, bookData.publisherID)
      ])
      return await BookModel.findByIdAndUpdate(id, bookData, { new: true })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Authorized(UserRole.EDITOR)
  @Mutation(returns => Boolean, { description: "Deletes a book with an specified ID from the database, returns a boolean confirming if the deletion was successful or not" })
  async deleteBookById(@Arg("id", type => ID) bookID: string): Promise<boolean> {
    try {
      const bookToDelete = await BookModel.findById(bookID)
      await Promise.all([
        await removeBookIdFromAuthors(bookID, bookToDelete.authorIDs),
        await removeBookIdFromPublisher(bookID, bookToDelete.publisherID)
      ])
      bookToDelete.delete()
      return true
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @FieldResolver()
  async publisher(
    @Root() bookDoc: DocumentType<Book>,
    @Ctx() { dataLoaders }: MyContext
  ): Promise<Publisher|Error> {
    try {
      const { publisherID }: Book = bookDoc.toObject()
      const { publisherLoader } = dataLoaders
      return await publisherLoader.load(publisherID)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  @Authorized(UserRole.VIEWER, UserRole.EDITOR)
  @FieldResolver()
  async authors(
    @Root() bookDoc: DocumentType<Book>,
    @Ctx() { dataLoaders }: MyContext
  ): Promise<(Author|Error)[]> {
    try {
      const { authorIDs }: Book = bookDoc.toObject()
      const { authorLoader } = dataLoaders
      return await authorLoader.loadMany([...authorIDs])
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
