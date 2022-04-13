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
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const paginationArgs_1 = require("../arg-types/paginationArgs");
const dataloaders_1 = require("../dataloaders");
const user_model_1 = require("../users/user.model");
const author_model_1 = require("./author.model");
let AuthorResolver = class AuthorResolver {
    async author(id) {
        return await author_model_1.AuthorModel.findById(id);
    }
    async authors({ page, amount }) {
        const entriesToShow = amount;
        const entriesToSkip = entriesToShow * (page - 1);
        return await author_model_1.AuthorModel
            .find()
            .limit(entriesToShow)
            .skip(entriesToSkip);
    }
    books(author) {
        return (dataloader) => {
            dataloader.loadMany([...author.bookIDs]);
        };
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.VIEWER, user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Query)(returns => author_model_1.Author),
    __param(0, (0, type_graphql_1.Arg)("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.VIEWER, user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Query)(returns => [author_model_1.Author]),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationArgs_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(dataloaders_1.bookLoader),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_model_1.Author]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "books", null);
AuthorResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => author_model_1.Author)
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWEvYXV0aG9ycy9hdXRob3IucmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUE4RjtBQUM5RixxRUFBZ0Q7QUFDaEQsZ0VBQTREO0FBRTVELGdEQUEyQztBQUMzQyxvREFBOEM7QUFDOUMsaURBQW9EO0FBR3BELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFHekIsS0FBSyxDQUFDLE1BQU0sQ0FBd0IsRUFBVTtRQUM1QyxPQUFPLE1BQU0sMEJBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUlELEtBQUssQ0FBQyxPQUFPLENBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFrQjtRQUNwRCxNQUFNLGFBQWEsR0FBVyxNQUFNLENBQUE7UUFDcEMsTUFBTSxhQUFhLEdBQVcsYUFBYSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBRXhELE9BQU8sTUFBTSwwQkFBVzthQUNyQixJQUFJLEVBQUU7YUFDTixLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBSUQsS0FBSyxDQUFTLE1BQWM7UUFDMUIsT0FBTyxDQUFDLFVBQW1DLEVBQUUsRUFBRTtZQUM3QyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXZCQztJQUZDLElBQUEseUJBQVUsRUFBQyxxQkFBUSxDQUFDLE1BQU0sRUFBRSxxQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFBLG9CQUFLLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxxQkFBTSxDQUFDO0lBQ1gsV0FBQSxJQUFBLGtCQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQUUsQ0FBQyxDQUFBOzs7OzRDQUVsQztBQUlEO0lBRkMsSUFBQSx5QkFBVSxFQUFDLHFCQUFRLENBQUMsTUFBTSxFQUFFLHFCQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQUEsb0JBQUssRUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQU0sQ0FBQyxDQUFDO0lBQ1osV0FBQSxJQUFBLG1CQUFJLEdBQUUsQ0FBQTs7cUNBQW1CLCtCQUFjOzs2Q0FRckQ7QUFJRDtJQUZDLElBQUEsNEJBQWEsR0FBRTtJQUNmLElBQUEsZ0NBQU0sRUFBQyx3QkFBVSxDQUFDO0lBQ1osV0FBQSxJQUFBLG1CQUFJLEdBQUUsQ0FBQTs7cUNBQVMscUJBQU07OzJDQUkzQjtBQXpCVSxjQUFjO0lBRDFCLElBQUEsdUJBQVEsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHFCQUFNLENBQUM7R0FDVixjQUFjLENBMEIxQjtBQTFCWSx3Q0FBYyJ9