"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const dataloaders_1 = require("../dataloaders");
const user_model_1 = require("../users/user.model");
const book_args_1 = require("./book.args");
const book_inputs_1 = require("./book.inputs");
const book_model_1 = require("./book.model");
let BookResolver = class BookResolver {
    async book(id) {
        return await book_model_1.BookModel.findById(id);
    }
    async books({ page, amount, year, title, authorID, publisherID, orderBy, orderType }) {
        const entriesToShow = amount !== null && amount !== void 0 ? amount : 10;
        const entriesToSkip = entriesToShow * (page - 1);
        const filter = {};
        if (year)
            filter.publicationYear = year;
        if (title)
            filter.title = new RegExp(title, "i");
        if (authorID)
            filter.authorIDs = { $in: [authorID] };
        if (publisherID)
            filter.publisherID = publisherID;
        return book_model_1.BookModel
            .find(filter)
            .sort([[orderBy, orderType]])
            .limit(entriesToShow)
            .skip(entriesToSkip);
    }
    async registerBook(newBookData) {
        const newBook = new book_model_1.BookModel(newBookData);
        return await newBook.save().catch(err => { throw err; });
    }
    async updateBook(bookData) {
        const id = bookData.id;
        bookData.id = undefined;
        return await book_model_1.BookModel.findByIdAndUpdate(id, bookData, { returnOriginal: false });
    }
    async deleteBookById(id) {
        try {
            await book_model_1.BookModel.findByIdAndDelete(id);
            return true;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    publisher(book) {
        return (dataloader) => {
            dataloader.load(book.publisherID);
        };
    }
    authors(book) {
        return (dataloader) => {
            dataloader.loadMany([...book.authorIDs]);
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => book_model_1.Book),
    __param(0, (0, type_graphql_1.Arg)("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    (0, type_graphql_1.Query)(returns => [book_model_1.Book]),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_args_1.GetBooksArgs]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Mutation)(returns => book_model_1.Book),
    __param(0, (0, type_graphql_1.Arg)("newBookData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_inputs_1.RegisterBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "registerBook", null);
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Mutation)(returns => book_model_1.Book),
    __param(0, (0, type_graphql_1.Arg)("bookData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_inputs_1.UpdateBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBook", null);
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBookById", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(dataloaders_1.publisherLoader),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_model_1.Book]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "publisher", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(dataloaders_1.authorLoader),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_model_1.Book]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "authors", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => book_model_1.Book)
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5yZXNvbHZlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hL2Jvb2tzL2Jvb2sucmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUF5RztBQUN6RyxxRUFBaUQ7QUFFakQsZ0RBQStEO0FBRS9ELG9EQUErQztBQUMvQywyQ0FBdUQ7QUFDdkQsK0NBQW1FO0FBQ25FLDZDQUErQztBQUcvQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLEtBQUssQ0FBQyxJQUFJLENBQXdCLEVBQVU7UUFDMUMsT0FBTyxNQUFNLHNCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFHRCxLQUFLLENBQUMsS0FBSyxDQUVULEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBZ0I7UUFFdEYsTUFBTSxhQUFhLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksRUFBRSxDQUFBO1FBQ2xDLE1BQU0sYUFBYSxHQUFHLGFBQWEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUVoRCxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUE7UUFDN0IsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7UUFDdkMsSUFBSSxLQUFLO1lBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDaEQsSUFBSSxRQUFRO1lBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUE7UUFDcEQsSUFBSSxXQUFXO1lBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFF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