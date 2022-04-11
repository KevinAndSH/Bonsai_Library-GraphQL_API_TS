import { ArrayMinSize, IsISBN } from "class-validator";
import { Field, ID, InputType, Int } from "type-graphql";
import { Book } from "./book.model";

@InputType()
export class RegisterBookInput implements Partial<Book> {
  @Field()
  title: string

  @Field()
  @IsISBN()
  isbn: string

  @Field({ nullable: true })
  synopsis: string

  @Field(type => [String])
  genres: string[]

  @Field(type => Int, { nullable: true })
  publicationYear: number

  @Field(type => [ID])
  @ArrayMinSize(1)
  authorIDs: string[]

  @Field(type => [ID])
  publisherID: string
}

@InputType()
export class UpdateBookInput implements Partial<Book> {
  @Field(type => ID)
  id: string

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  @IsISBN()
  isbn: string

  @Field({ nullable: true })
  synopsis: string

  @Field(type => [String], { nullable: true })
  genres: string[]

  @Field(type => Int, { nullable: true })
  publicationYear: number

  @Field(type => [ID], { nullable: true })
  @ArrayMinSize(1)
  authorIDs: string[]

  @Field(type => [ID], { nullable: true })
  publisherID: string
}
