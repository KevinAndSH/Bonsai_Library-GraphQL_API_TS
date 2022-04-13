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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBooksArgs = void 0;
const type_graphql_1 = require("type-graphql");
const paginationArgs_1 = require("../arg-types/paginationArgs");
let GetBooksArgs = class GetBooksArgs extends paginationArgs_1.PaginationArgs {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetBooksArgs.prototype, "year", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetBooksArgs.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], GetBooksArgs.prototype, "authorID", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], GetBooksArgs.prototype, "publisherID", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => SortCriteria, { nullable: true }),
    __metadata("design:type", String)
], GetBooksArgs.prototype, "orderBy", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => OrderType, { nullable: true }),
    __metadata("design:type", Number)
], GetBooksArgs.prototype, "orderType", void 0);
GetBooksArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], GetBooksArgs);
exports.GetBooksArgs = GetBooksArgs;
var SortCriteria;
(function (SortCriteria) {
    SortCriteria["TITLE"] = "title";
    SortCriteria["YEAR"] = "publicationYear";
})(SortCriteria || (SortCriteria = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["ASC"] = 1] = "ASC";
    OrderType[OrderType["DESC"] = -1] = "DESC";
})(OrderType || (OrderType = {}));
(0, type_graphql_1.registerEnumType)(SortCriteria, {
    name: "SortCriteria",
    description: "Order by either book title or publication year",
    valuesConfig: {
        TITLE: { description: "Alphabetically order by title" },
        YEAR: { description: "Order by publication year" }
    }
});
(0, type_graphql_1.registerEnumType)(OrderType, {
    name: "OrderType",
    description: "Ascendent or descendent ordering",
    valuesConfig: {
        ASC: { description: "Ascendent" },
        DESC: { description: "Descendent" }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5hcmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYS9ib29rcy9ib29rLmFyZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlFO0FBQ3pFLGdFQUE0RDtBQUc1RCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFhLFNBQVEsK0JBQWM7Q0FrQi9DLENBQUE7QUFoQkM7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDM0I7QUFHWjtJQURDLElBQUEsb0JBQUssRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ2I7QUFHYjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzhDQUN0QjtBQUdoQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUNuQjtBQUduQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQzNCO0FBR3JCO0lBREMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDekI7QUFqQlQsWUFBWTtJQUR4QixJQUFBLHVCQUFRLEdBQUU7R0FDRSxZQUFZLENBa0J4QjtBQWxCWSxvQ0FBWTtBQTZCekIsSUFBSyxZQUdKO0FBSEQsV0FBSyxZQUFZO0lBQ2YsK0JBQWUsQ0FBQTtJQUNmLHdDQUF3QixDQUFBO0FBQzFCLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUVELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLHVDQUFPLENBQUE7SUFDUCwwQ0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFRCxJQUFBLCtCQUFnQixFQUFDLFlBQVksRUFBRTtJQUM3QixJQUFJLEVBQUUsY0FBYztJQUNwQixXQUFXLEVBQUUsZ0RBQWdEO0lBQzdELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSwrQkFBK0IsRUFBRTtRQUN2RCxJQUFJLEVBQUUsRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUU7S0FDbkQ7Q0FDRixDQUFDLENBQUE7QUFFRixJQUFBLCtCQUFnQixFQUFDLFNBQVMsRUFBRTtJQUMxQixJQUFJLEVBQUUsV0FBVztJQUNqQixXQUFXLEVBQUUsa0NBQWtDO0lBQy9DLFlBQVksRUFBRTtRQUNaLEdBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7UUFDakMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtLQUNwQztDQUNGLENBQUMsQ0FBQSJ9