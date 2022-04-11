import mongoose from "mongoose"
import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ID, Int, ObjectType } from "type-graphql"
import { Author } from "../authors/author.model"
import { Publisher } from "../publishers/publisher.model"

@ObjectType({ description: "All the information about a book" })
export class Book {
  @Field(type => ID, { description: "Unique identifier in the database" })
  id: string
  
  @prop({ required: true, trim: true })
  @Field({ description: "Name of the book" })
  title: string
  
  @prop({ required: true, trim: true })
  @Field({ description: "International Standard Book Number" })
  isbn: string
  
  @prop({ trim: true })
  @Field({ nullable: true, description: "Brief summary of the major points of the book" })
  synopsis: string
  
  @prop({ type: () => [String], trim: true })
  @Field(type => [String], { description: "A list of genres for this book" })
  genres: string[]
  
  @prop()
  @Field(type => Int, { nullable: true, description: "Year this book was published at" })
  publicationYear: number

  @prop({ type: () => mongoose.Types.ObjectId, required: true })
  authorIDs: string[]
  
  @Field(type => [Author], { description: "Author(s) of this book" })
  authors: Author[]

  @prop({ type: () => mongoose.Types.ObjectId, required: true })
  publisherID: string
  
  @Field(type => Publisher, { description: "Publisher information" })
  publisher: Publisher
}

export const BookModel = getModelForClass(Book)
