import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, ObjectType } from "type-graphql"
import { Author } from "../authors/author.model"
import { Publisher } from "../publishers/publisher.model"

@ObjectType({ description: "All the information about a book" })
export class Book {
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

export const BookModel = getModelForClass(Book)
