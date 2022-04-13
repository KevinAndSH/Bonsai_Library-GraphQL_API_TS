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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModel = exports.Author = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const book_model_1 = require("../books/book.model");
let Author = class Author {
    fullName(author) {
        var _a, _b;
        return `${(_a = author.firstName) !== null && _a !== void 0 ? _a : ""} ${(_b = author.lastName) !== null && _b !== void 0 ? _b : ""}`.trim();
    }
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { description: "Unique identifier in the database" }),
    __metadata("design:type", String)
], Author.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true, required: true }),
    (0, type_graphql_1.Field)({ description: "Author's first name" }),
    __metadata("design:type", String)
], Author.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    (0, type_graphql_1.Field)({ nullable: true, description: "Author's last name" }),
    __metadata("design:type", String)
], Author.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ description: "Author's full name" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", String)
], Author.prototype, "fullName", null);
__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    (0, type_graphql_1.Field)({ description: "Author's country" }),
    __metadata("design:type", String)
], Author.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [mongoose_1.default.Types.ObjectId], required: true }),
    __metadata("design:type", Array)
], Author.prototype, "bookIDs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [book_model_1.Book], { description: "Books written by this author in our database" }),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "Information about an author" })
], Author);
exports.Author = Author;
exports.AuthorModel = (0, typegoose_1.getModelForClass)(Author);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYS9hdXRob3JzL2F1dGhvci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0I7QUFDL0Isb0RBQTZEO0FBQzdELCtDQUEwRDtBQUMxRCxvREFBMEM7QUFHMUMsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQWFqQixRQUFRLENBQVMsTUFBYzs7UUFDN0IsT0FBTyxHQUFHLE1BQUEsTUFBTSxDQUFDLFNBQVMsbUNBQUksRUFBRSxJQUFJLE1BQUEsTUFBTSxDQUFDLFFBQVEsbUNBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDcEUsQ0FBQztDQVdGLENBQUE7QUF4QkM7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7O2tDQUM5RDtBQUlWO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBQSxvQkFBSyxFQUFDLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLENBQUM7O3lDQUM3QjtBQUlqQjtJQUZDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwQixJQUFBLG9CQUFLLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDOzt3Q0FDN0M7QUFHaEI7SUFEQyxJQUFBLG9CQUFLLEVBQUMsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztJQUNuQyxXQUFBLElBQUEsbUJBQUksR0FBRSxDQUFBOztxQ0FBUyxNQUFNOztzQ0FFOUI7QUFJRDtJQUZDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwQixJQUFBLG9CQUFLLEVBQUMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzs7dUNBQzVCO0FBR2Y7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUMvQztBQUdqQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLDhDQUE4QyxFQUFFLENBQUM7O3FDQUMxRTtBQXpCRixNQUFNO0lBRGxCLElBQUEseUJBQVUsRUFBQyxFQUFFLFdBQVcsRUFBRSw2QkFBNkIsRUFBRSxDQUFDO0dBQzlDLE1BQU0sQ0EwQmxCO0FBMUJZLHdCQUFNO0FBNEJOLFFBQUEsV0FBVyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsTUFBTSxDQUFDLENBQUEifQ==