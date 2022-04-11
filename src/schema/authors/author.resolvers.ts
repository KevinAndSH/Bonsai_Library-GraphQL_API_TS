import { Arg, Args, FieldResolver, ID, Query, Resolver, Root } from "type-graphql"
import { PaginationArgs } from "../arg-types/paginationArgs"
import { Author, AuthorModel } from "./author.model"

@Resolver(of => Author)
export class AuthorResolver {
  @Query(returns => Author)
  async author(@Arg("id", type => ID) id: string): Promise<Author> {
    return await AuthorModel.findById(id)
  }

  @Query(returns => [Author])
  async authors(@Args() { page, amount }: PaginationArgs): Promise<Author[]> {
    const entriesToShow: number = amount
    const entriesToSkip: number = entriesToShow * (page - 1)

    return await AuthorModel
      .find()
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }

  // @FieldResolver()
  // fullName(@Root() { firstName, lastName }: Author): string {
  //   return [firstName, lastName].join(" ").trim()
  // }
}
