import { Arg, Args, Query, Resolver } from "type-graphql"
import { GetBooksArgs } from "../books/book.args"
import { Author, AuthorModel } from "./author.model"

@Resolver()
export class AuthorResolver {
  @Query(returns => Author)
  async author(
    @Arg("id", { description: "" }) id: string
  ) {
    return await AuthorModel.findById(id)
  }

  @Query(returns => [Author])
  async authors(@Args() { page, amount, year, title, authorID, publisherID }: GetBooksArgs) {
    const entriesToShow: number = amount
    const entriesToSkip: number = entriesToShow * (page - 1)

    return await AuthorModel
      .find()
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }
}

