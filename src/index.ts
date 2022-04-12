import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { buildSchema } from "type-graphql"
import mongoose from "mongoose"

import { AuthorResolver } from "./schema/authors/author.resolvers"
import { BookResolver } from "./schema/books/book.resolvers"
import { PublisherResolver } from "./schema/publishers/publisher.resolvers"
import { UserResolver } from "./schema/users/user.resolvers"

mongoose.set('debug', true)
mongoose.connect(process.env.DB_URI, () => console.log("Connected to the database"))

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AuthorResolver, BookResolver, PublisherResolver, UserResolver]
  })

  const plugins = [ApolloServerPluginLandingPageGraphQLPlayground()]

  const server = new ApolloServer({ schema, plugins })

  server.listen().then(({ url }) => console.log(`GraphQL server running at ${url}`))
}

bootstrap()
