import { ArgsType, Field, Int } from "type-graphql"

@ArgsType()
export class PaginationArgs {
  @Field(type => Int, { nullable: true, defaultValue: 1 })
  page?: number

  @Field(type => Int, { nullable: true, defaultValue: 10 })
  amount?: number
}
