import { Arg, Args, ID, Query, Resolver } from "type-graphql";
import { PaginationArgs } from "../arg-types/paginationArgs";
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
}
