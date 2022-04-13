"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const mongoose_1 = __importDefault(require("mongoose"));
const author_resolvers_1 = require("./schema/authors/author.resolvers");
const book_resolvers_1 = require("./schema/books/book.resolvers");
const publisher_resolvers_1 = require("./schema/publishers/publisher.resolvers");
const user_resolvers_1 = require("./schema/users/user.resolvers");
const context_1 = __importDefault(require("./context"));
const authChecker_1 = require("./authChecker");
mongoose_1.default.set('debug', process.env.NODE_ENV !== "production");
mongoose_1.default.connect(process.env.DB_URI, () => console.log("Connected to the database"));
(async function () {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [author_resolvers_1.AuthorResolver, book_resolvers_1.BookResolver, publisher_resolvers_1.PublisherResolver, user_resolvers_1.UserResolver],
        authChecker: authChecker_1.customAuthChecker
    });
    const plugins = [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()];
    const introspection = true;
    const server = new apollo_server_1.ApolloServer({ schema, plugins, context: context_1.default, introspection });
    server.listen({ port: process.env.PORT }).then(({ url }) => console.log(`GraphQL server running at ${url}`));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0QkFBeUI7QUFDekIsaURBQTRDO0FBQzVDLDJEQUFtRjtBQUNuRiwrQ0FBMEM7QUFDMUMsd0RBQStCO0FBRS9CLHdFQUFrRTtBQUNsRSxrRUFBNEQ7QUFDNUQsaUZBQTJFO0FBQzNFLGtFQUE0RDtBQUM1RCx3REFBK0I7QUFDL0IsK0NBQWlEO0FBRWpELGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQTtBQUM1RCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FFbkY7QUFBQSxDQUFDLEtBQUs7SUFDTCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsMEJBQVcsRUFBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyxpQ0FBYyxFQUFFLDZCQUFZLEVBQUUsdUNBQWlCLEVBQUUsNkJBQVksQ0FBQztRQUMxRSxXQUFXLEVBQUUsK0JBQWlCO0tBQy9CLENBQUMsQ0FBQTtJQUVGLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBQSxtRUFBOEMsR0FBRSxDQUFDLENBQUE7SUFFbEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFBO0lBRTFCLE1BQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFQLGlCQUFPLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtJQUU1RSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDOUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9