import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, ObjectType } from "type-graphql"
import { Book } from "../books/book.model"

@ObjectType({ description: "Information about an author" })
export class Author {
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

export const AuthorModel = getModelForClass(Author)
