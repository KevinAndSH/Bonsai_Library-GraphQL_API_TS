# Bonsai Library - GraphQL API (TypeScript)

(Check it out [here](https://bonsai-library-api-ts.herokuapp.com)!)

GraphQL API made with [Apollo Server](https://www.apollographql.com/docs/apollo-server/), connected to a [MongoDB](https://www.mongodb.com) database, storing data for `books`, `authors` and `publishers`.

Users can freely retrieve information about `books` and `publishers`, and also register with `username`, `email`, `password` and `passwordConfirm` (password is hashed with [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js) before being stored in the database), and login with email and password; doing so will return an authentication `token` provided with [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken).

Login is necessary in order to query for `authors` information. Registered users can also register and edit books in the database, but first they will need to `askForEditorRole`, so they will get a higher role in their profile, and an updated `token` in response.

Database was filled with fake data generated in the website [Mockaroo](https://www.mockaroo.com) with the help of the library [`fakerjs`](https://fakerjs.dev)

[TypeScript](https://www.typescriptlang.org) was used as our language, [Mongoose](https://mongoosejs.com/) for querying to the database, [TypeGraphQL](https://typegraphql.com) and [Typegoose](https://typegoose.github.io/typegoose/docs/guides/quick-start-guide) to help creating our GraphQL and Mongoose schemas respectively by just hooking TypeScript decorators in a single class rather than having to write them from scratch, making the development process much smoother. [`dataloader`](https://github.com/graphql/dataloader) was also used to batch and cache nested queries in order to avoid the N + 1 queries issue GraphQL tends to bring.
