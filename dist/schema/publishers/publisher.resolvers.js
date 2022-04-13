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
exports.PublisherResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const paginationArgs_1 = require("../arg-types/paginationArgs");
const dataloaders_1 = require("../dataloaders");
const publisher_model_1 = require("./publisher.model");
let PublisherResolver = class PublisherResolver {
    async publisher(id) {
        return await publisher_model_1.PublisherModel.findById(id);
    }
    async publishers({ page, amount }) {
        const entriesToShow = amount;
        const entriesToSkip = entriesToShow * (page - 1);
        return await publisher_model_1.PublisherModel
            .find()
            .limit(entriesToShow)
            .skip(entriesToSkip);
    }
    books(publisher) {
        return (dataloader) => {
            dataloader.loadMany([...publisher.bookIDs]);
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => publisher_model_1.Publisher),
    __param(0, (0, type_graphql_1.Arg)("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublisherResolver.prototype, "publisher", null);
__decorate([
    (0, type_graphql_1.Query)(returns => [publisher_model_1.Publisher]),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationArgs_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], PublisherResolver.prototype, "publishers", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(dataloaders_1.bookLoader),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publisher_model_1.Publisher]),
    __metadata("design:returntype", void 0)
], PublisherResolver.prototype, "books", null);
PublisherResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => publisher_model_1.Publisher)
], PublisherResolver);
exports.PublisherResolver = PublisherResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWEvcHVibGlzaGVycy9wdWJsaXNoZXIucmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUFtRjtBQUNuRixxRUFBaUQ7QUFDakQsZ0VBQTZEO0FBRTdELGdEQUE0QztBQUM1Qyx1REFBOEQ7QUFHOUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFFNUIsS0FBSyxDQUFDLFNBQVMsQ0FBd0IsRUFBVTtRQUMvQyxPQUFPLE1BQU0sZ0NBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUdELEtBQUssQ0FBQyxVQUFVLENBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFrQjtRQUN2RCxNQUFNLGFBQWEsR0FBVyxNQUFNLENBQUE7UUFDcEMsTUFBTSxhQUFhLEdBQVcsYUFBYSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBRXhELE9BQU8sTUFBTSxnQ0FBYzthQUN4QixJQUFJLEVBQUU7YUFDTixLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBSUQsS0FBSyxDQUFTLFNBQW9CO1FBQ2hDLE9BQU8sQ0FBQyxVQUFtQyxFQUFFLEVBQUU7WUFDN0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDN0MsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF0QkM7SUFEQyxJQUFBLG9CQUFLLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQywyQkFBUyxDQUFDO0lBQ1gsV0FBQSxJQUFBLGtCQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQUUsQ0FBQyxDQUFBOzs7O2tEQUVyQztBQUdEO0lBREMsSUFBQSxvQkFBSyxFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQywyQkFBUyxDQUFDLENBQUM7SUFDWixXQUFBLElBQUEsbUJBQUksR0FBRSxDQUFBOztxQ0FBbUIsK0JBQWM7O21EQVF4RDtBQUlEO0lBRkMsSUFBQSw0QkFBYSxHQUFFO0lBQ2YsSUFBQSxnQ0FBTSxFQUFDLHdCQUFVLENBQUM7SUFDWixXQUFBLElBQUEsbUJBQUksR0FBRSxDQUFBOztxQ0FBWSwyQkFBUzs7OENBSWpDO0FBdkJVLGlCQUFpQjtJQUQ3QixJQUFBLHVCQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQywyQkFBUyxDQUFDO0dBQ2IsaUJBQWlCLENBd0I3QjtBQXhCWSw4Q0FBaUIifQ==