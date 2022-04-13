import { DocumentType } from "@typegoose/typegoose";
import { Arg, Args, Ctx, FieldResolver, ID, Query, Resolver, Root } from "type-graphql";
import { MyContext } from "../../context";
import { PaginationArgs } from "../arg-types/paginationArgs";
import { Book, BookModel } from "../books/book.model";
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
  async books(
    @Root() publisherDoc: DocumentType<Publisher>,
    @Ctx() { dataloaderFactory }: MyContext
  ): Promise<Book[]> {
    const { bookIDs }: Publisher = publisherDoc.toObject()
    const bookLoader = dataloaderFactory.mongooseLoader(BookModel).dataloader("_id")
    return await bookLoader.loadMany([...bookIDs])
  }
}
