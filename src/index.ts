import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { buildSchema } from "type-graphql"
import mongoose from "mongoose"

import { AuthorResolver } from "./schema/authors/author.resolvers"
import { BookResolver } from "./schema/books/book.resolvers"
import { PublisherResolver } from "./schema/publishers/publisher.resolvers"
import { UserResolver } from "./schema/users/user.resolvers"
import context from "./context"
import { customAuthChecker } from "./authChecker"

mongoose.set('debug', process.env.NODE_ENV === "development")
mongoose.connect(process.env.DB_URI, () => console.log("Connected to the database"))

;(async function() {
  const schema = await buildSchema({
    authChecker: customAuthChecker,
    resolvers: [
      AuthorResolver,
      BookResolver,
      PublisherResolver,
      UserResolver
    ]
  })

  const server = new ApolloServer({
    schema, context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    introspection: true
  })

  const port = process.env.PORT

  server.listen({ port }).then(({ url }) => console.log(`GraphQL server running at ${url}`))
})()
