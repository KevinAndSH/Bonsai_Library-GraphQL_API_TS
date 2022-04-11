import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import mongoose from "mongoose"

import { AuthorResolver } from "./schema/authors/author.resolvers"
import { BookResolver } from "./schema/books/book.resolvers"
import { PublisherResolver } from "./schema/publishers/publisher.resolvers"

mongoose.set('debug', true)
mongoose.connect(process.env.DB_URI, () => console.log("Connected to the database"))

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AuthorResolver, BookResolver, PublisherResolver]
  })

  const server = new ApolloServer({ schema })

  server.listen().then(({ url }) => console.log(`GraphQL server running at ${url}`))
}

bootstrap()
