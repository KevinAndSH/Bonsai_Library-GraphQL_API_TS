import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, ObjectType } from "type-graphql"
import { Book } from "../books/book.model"

@ObjectType({ description: "All the information about a publisher" })
export class Publisher {
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

export const PublisherModel = getModelForClass(Publisher)
