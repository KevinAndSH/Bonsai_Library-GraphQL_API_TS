import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, Int, ObjectType } from "type-graphql"
import { Book } from "../books/book.model"

@ObjectType({ description: "All the information about a publisher" })
export class Publisher {
  @Field(type => ID, { description: "Unique identifier in the database" })
  id: string

  @prop({ required: true, trim: true })
  @Field({ description: "Name of the publisher" })
  name: string

  @prop()
  @Field(type => Int, { description: "Year the publisher was founded" })
  foundationYear: number

  @prop({ type: () => [mongoose.Types.ObjectId], required: true })
  bookIDs: string[]

  @Field(type => [Book], { description: "Books published" })
  books: Book[]
}

export const PublisherModel = getModelForClass(Publisher)
