import DataLoader from "dataloader"
import { Arg, Args, Authorized, FieldResolver, ID, Query, Resolver, Root } from "type-graphql"
import { Loader } from "type-graphql-dataloader"
import { PaginationArgs } from "../arg-types/paginationArgs"
import { Book } from "../books/book.model"
import { bookLoader } from "../dataloaders"
import { UserRole } from "../users/user.model"
import { Author, AuthorModel } from "./author.model"

@Resolver(of => Author)
export class AuthorResolver {
  @Authorized(UserRole.VIEWER, UserRole.EDITOR)
  @Query(returns => Author)
  async author(@Arg("id", type => ID) id: string): Promise<Author> {
    return await AuthorModel.findById(id)
  }

  @Authorized(UserRole.VIEWER, UserRole.EDITOR)
  @Query(returns => [Author])
  async authors(@Args() { page, amount }: PaginationArgs): Promise<Author[]> {
    const entriesToShow: number = amount
    const entriesToSkip: number = entriesToShow * (page - 1)

    return await AuthorModel
      .find()
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }

  @FieldResolver()
  @Loader(bookLoader)
  books(@Root() author: Author) {
    return (dataloader: DataLoader<any, Book[]>) => {
      dataloader.loadMany([...author.bookIDs])
    }
  }
}
