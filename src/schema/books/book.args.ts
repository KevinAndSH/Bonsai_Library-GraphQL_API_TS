import { ArgsType, Field, ID, Int } from "type-graphql"
import { PaginationArgs } from "../arg-types/paginationArgs"

@ArgsType()
export class GetBooksArgs extends PaginationArgs {
  @Field(type => Int, { nullable: true })
  year?: number

  @Field({ nullable: true })
  title?: string

  @Field(type => ID, { nullable: true })
  authorID?: string

  @Field(type => ID, { nullable: true })
  publisherID?: string
}

