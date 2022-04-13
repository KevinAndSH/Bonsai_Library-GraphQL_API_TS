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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.Book = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const author_model_1 = require("../authors/author.model");
const publisher_model_1 = require("../publishers/publisher.model");
let Book = class Book {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { description: "Unique identifier in the database" }),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true }),
    (0, type_graphql_1.Field)({ description: "Name of the book" }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, unique: true }),
    (0, type_graphql_1.Field)({ description: "International Standard Book Number" }),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    (0, type_graphql_1.Field)({ nullable: true, description: "Brief summary of the major points of the book" }),
    __metadata("design:type", String)
], Book.prototype, "synopsis", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String], trim: true }),
    (0, type_graphql_1.Field)(type => [String], { description: "A list of genres for this book" }),
    __metadata("design:type", Array)
], Book.prototype, "genres", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true, description: "Year this book was published at" }),
    __metadata("design:type", Number)
], Book.prototype, "publicationYear", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => mongoose_1.default.Types.ObjectId, required: true }),
    __metadata("design:type", Array)
], Book.prototype, "authorIDs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [author_model_1.Author], { description: "Author(s) of this book" }),
    __metadata("design:type", Array)
], Book.prototype, "authors", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => mongoose_1.default.Types.ObjectId, required: true }),
    __metadata("design:type", String)
], Book.prototype, "publisherID", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => publisher_model_1.Publisher, { description: "Publisher information" }),
    __metadata("design:type", publisher_model_1.Publisher)
], Book.prototype, "publisher", void 0);
Book = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "All the information about a book" })
], Book);
exports.Book = Book;
exports.BookModel = (0, typegoose_1.getModelForClass)(Book);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWEvYm9va3MvYm9vay5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0I7QUFDL0Isb0RBQTZEO0FBQzdELCtDQUF5RDtBQUN6RCwwREFBZ0Q7QUFDaEQsbUVBQXlEO0FBR3pELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FtQ2hCLENBQUE7QUFqQ0M7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7O2dDQUM5RDtBQUlWO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBQSxvQkFBSyxFQUFDLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLENBQUM7O21DQUM5QjtBQUliO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsRCxJQUFBLG9CQUFLLEVBQUMsRUFBRSxXQUFXLEVBQUUsb0NBQW9DLEVBQUUsQ0FBQzs7a0NBQ2pEO0FBSVo7SUFGQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEIsSUFBQSxvQkFBSyxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsK0NBQStDLEVBQUUsQ0FBQzs7c0NBQ3hFO0FBSWhCO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQzs7b0NBQzNEO0FBSWhCO0lBRkMsSUFBQSxnQkFBSSxHQUFFO0lBQ04sSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLGlDQUFpQyxFQUFFLENBQUM7OzZDQUNoRTtBQUd2QjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDM0M7QUFHbkI7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHFCQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxDQUFDOztxQ0FDbEQ7QUFHakI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQzNDO0FBR25CO0lBREMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxDQUFDOzhCQUN4RCwyQkFBUzt1Q0FBQTtBQWxDVCxJQUFJO0lBRGhCLElBQUEseUJBQVUsRUFBQyxFQUFFLFdBQVcsRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO0dBQ25ELElBQUksQ0FtQ2hCO0FBbkNZLG9CQUFJO0FBcUNKLFFBQUEsU0FBUyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUEifQ==