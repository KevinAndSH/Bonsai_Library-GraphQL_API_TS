import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Arg, Args, ArgsType, Field, ID, Int, ObjectType, Query, Resolver } from "type-graphql"

@ArgsType()
class PaginationArgs {
  @Field(type => Int, { nullable: true, defaultValue: 1 })
  page?: number

  @Field(type => Int, { nullable: true, defaultValue: 10 })
  amount?: number
}

@ArgsType()
class GetBooksArgs extends PaginationArgs {
  @Field(type => Int, { nullable: true })
  year?: number

  @Field({ nullable: true })
  title?: string

  @Field(type => ID, { nullable: true })
  authorID?: string

  @Field(type => ID, { nullable: true })
  publisherID?: string
}

@ObjectType({ description: "Information about an author" })
class Author {
  @Field(type => ID)
  id: string

  @prop()
  @Field({ description: "Author's first name" })
  firstName: string

  @prop()
  @Field({ nullable: true, description: "Author's last name" })
  lastName?: string

  @Field({ description: "Author's full name" })
  fullName: string

  @prop()
  @Field({ description: "Author's country" })
  country: string

  @prop({ type: () => [mongoose.Types.ObjectId] })
  bookIDs: string[]

  @Field(type => [Book])
  books: Book[]
}

@Resolver()
export class AuthorResolver {
  @Query(returns => Author)
  async author(
    @Arg("id", { description: "" }) id: string
  ) {
    return await AuthorModel.findById(id)
  }

  @Query(returns => [Author])
  async authors(@Args() { page, amount, year, title, authorID, publisherID }: GetBooksArgs) {
    const entriesToShow: number = amount
    const entriesToSkip: number = entriesToShow * (page - 1)

    return await AuthorModel
      .find()
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }
}

@ObjectType({ description: "All the information about a publisher" })
class Publisher {
  @Field(type => ID)
  id: string

  @Field({ description: "Name of the publisher" })
  name: string

  @Field({ description: "Year the publisher was founded" })
  foundationYear: number

  @prop({ type: () => [mongoose.Types.ObjectId] })
  bookIDs: string[]

  @Field(type => [Book])
  books: Book[]
}

@ObjectType({ description: "All the information about a book" })
class Book {
  @Field(type => ID)
  id: string
  
  @prop()
  @Field({ description: "Name of the book" })
  title: string
  
  @prop()
  @Field({ description: "International Standard Book Number" })
  isbn: string
  
  @prop()
  @Field({ nullable: true, description: "Brief summary of the major points of the book" })
  synopsis?: string
  
  @prop({ type: () => [String] })
  @Field(type => [String])
  genres: string[]
  
  @prop()
  @Field({ nullable: true, description: "Year this book was published at" })
  publicationYear?: number

  @prop({ type: () => mongoose.Types.ObjectId })
  authorIDs: string[]
  
  @Field(type => [Author])
  authors: Author[]

  @prop({ type: () => mongoose.Types.ObjectId })
  publisherID: string
  
  @Field(type => Publisher)
  publisher: Publisher
}

class User {
  @prop()
  username: string

  @prop()
  hashedPassword: string
}



const AuthorModel = getModelForClass(Author)
const BookModel = getModelForClass(Book)
const PublisherModel = getModelForClass(Publisher)
const UserModel = getModelForClass(User)
