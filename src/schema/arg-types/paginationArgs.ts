import { Min } from "class-validator"
import { ArgsType, Field, Int } from "type-graphql"

@ArgsType()
export class PaginationArgs {
  @Field(type => Int, { defaultValue: 1 })
  @Min(1)
  page: number

  @Field(type => Int, { defaultValue: 10 })
  @Min(1)
  amount: number
}
