import DataLoader from "dataloader";
import { Arg, Args, FieldResolver, ID, Query, Resolver, Root } from "type-graphql";
import { Loader } from "type-graphql-dataloader";
import { PaginationArgs } from "../arg-types/paginationArgs";
import { Book } from "../books/book.model";
import { bookLoader } from "../dataloaders";
import { Publisher, PublisherModel } from "./publisher.model";

@Resolver(of => Publisher)
export class PublisherResolver {
  @Query(returns => Publisher)
  async publisher(@Arg("id", type => ID) id: string): Promise<Publisher> {
    return await PublisherModel.findById(id)
  }

  @Query(returns => [Publisher])
  async publishers(@Args() { page, amount }: PaginationArgs): Promise<Publisher[]> {
    const entriesToShow: number = amount
    const entriesToSkip: number = entriesToShow * (page - 1)

    return await PublisherModel
      .find()
      .limit(entriesToShow)
      .skip(entriesToSkip)
  }

  @FieldResolver()
  @Loader(bookLoader)
  books(@Root() publisher: Publisher) {
    return (dataloader: DataLoader<any, Book[]>) => {
      dataloader.loadMany([...publisher.bookIDs])
    }
  }
}
