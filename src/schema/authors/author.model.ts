import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, ObjectType, Root } from "type-graphql"
import { Book } from "../books/book.model"

@ObjectType({ description: "Information about an author" })
export class Author {
  @Field(type => ID, { description: "Unique identifier in the database" })
  id: string

  @prop({ trim: true, required: true })
  @Field({ description: "Author's first name" })
  firstName: string

  @prop({ trim: true })
  @Field({ nullable: true, description: "Author's last name" })
  lastName: string

  @Field({ description: "Author's full name" })
  get fullName(): string {
    const { firstName, lastName } = this
    return [firstName, lastName].join(" ").trim()
  }

  @prop({ trim: true })
  @Field({ description: "Author's country" })
  country: string

  @prop({ type: () => [mongoose.Types.ObjectId], required: true })
  bookIDs: string[]

  @Field(type => [Book], { description: "Books written by this author in our database" })
  books: Book[]
}

export const AuthorModel = getModelForClass(Author)
