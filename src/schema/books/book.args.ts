import { ArgsType, Field, ID, Int, registerEnumType } from "type-graphql"
import { PaginationArgs } from "../arg-types/paginationArgs"

@ArgsType()
export class GetBooksArgs extends PaginationArgs {
  @Field(type => Int, { nullable: true })
  year: number

  @Field({ nullable: true })
  title: string

  @Field(type => ID, { nullable: true })
  authorID: string

  @Field(type => ID, { nullable: true })
  publisherID: string

  @Field(type => SortCriteria, { nullable: true })
  orderBy: SortCriteria

  @Field(type => OrderType, { nullable: true })
  orderType: OrderType
}

export interface BookFilter {
  publicationYear?: number
  title?: string|RegExp
  authorIDs?: { $in: string[] }
  publisherID?: string
  orderBy?: SortCriteria
  orderType?: OrderType
}

enum SortCriteria {
  TITLE = "title",
  YEAR = "publicationYear"
}

enum OrderType {
  ASC = 1,
  DESC = -1
}

registerEnumType(SortCriteria, {
  name: "SortCriteria",
  description: "Order by either book title or publication year",
  valuesConfig: {
    TITLE: { description: "Alphabetically order by title" },
    YEAR: { description: "Order by publication year" }
  }
})

registerEnumType(OrderType, {
  name: "OrderType",
  description: "Ascendent or descendent ordering",
  valuesConfig: {
    ASC: { description: "Ascendent" },
    DESC: { description: "Descendent" }
  }
})
