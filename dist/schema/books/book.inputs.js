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
exports.UpdateBookInput = exports.RegisterBookInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let RegisterBookInput = class RegisterBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsISBN)(),
    __metadata("design:type", String)
], RegisterBookInput.prototype, "isbn", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RegisterBookInput.prototype, "synopsis", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String]),
    __metadata("design:type", Array)
], RegisterBookInput.prototype, "genres", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], RegisterBookInput.prototype, "publicationYear", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [type_graphql_1.ID]),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], RegisterBookInput.prototype, "authorIDs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [type_graphql_1.ID]),
    __metadata("design:type", String)
], RegisterBookInput.prototype, "publisherID", void 0);
RegisterBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], RegisterBookInput);
exports.RegisterBookInput = RegisterBookInput;
let UpdateBookInput = class UpdateBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsISBN)(),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "isbn", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "synopsis", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateBookInput.prototype, "genres", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateBookInput.prototype, "publicationYear", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [type_graphql_1.ID], { nullable: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], UpdateBookInput.prototype, "authorIDs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [type_graphql_1.ID], { nullable: true }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "publisherID", void 0);
UpdateBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateBookInput);
exports.UpdateBookInput = UpdateBookInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5pbnB1dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hL2Jvb2tzL2Jvb2suaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1RDtBQUN2RCwrQ0FBeUQ7QUFJekQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0F1QjdCLENBQUE7QUFyQkM7SUFEQyxJQUFBLG9CQUFLLEdBQUU7O2dEQUNLO0FBSWI7SUFGQyxJQUFBLG9CQUFLLEdBQUU7SUFDUCxJQUFBLHdCQUFNLEdBQUU7OytDQUNHO0FBR1o7SUFEQyxJQUFBLG9CQUFLLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUNWO0FBR2hCO0lBREMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7aURBQ1I7QUFHaEI7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswREFDaEI7QUFJdkI7SUFGQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFFLENBQUMsQ0FBQztJQUNuQixJQUFBLDhCQUFZLEVBQUMsQ0FBQyxDQUFDOztvREFDRztBQUduQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQUUsQ0FBQyxDQUFDOztzREFDRDtBQXRCUixpQkFBaUI7SUFEN0IsSUFBQSx3QkFBUyxHQUFFO0dBQ0MsaUJBQWlCLENBdUI3QjtBQXZCWSw4Q0FBaUI7QUEwQjlCLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0EwQjNCLENBQUE7QUF4QkM7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBRSxDQUFDOzsyQ0FDUjtBQUdWO0lBREMsSUFBQSxvQkFBSyxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FDYjtBQUliO0lBRkMsSUFBQSxvQkFBSyxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLElBQUEsd0JBQU0sR0FBRTs7NkNBQ0c7QUFHWjtJQURDLElBQUEsb0JBQUssRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQ1Y7QUFHaEI7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDNUI7QUFHaEI7SUFEQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3REFDaEI7QUFJdkI7SUFGQyxJQUFBLG9CQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QyxJQUFBLDhCQUFZLEVBQUMsQ0FBQyxDQUFDOztrREFDRztBQUduQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDckI7QUF6QlIsZUFBZTtJQUQzQixJQUFBLHdCQUFTLEdBQUU7R0FDQyxlQUFlLENBMEIzQjtBQTFCWSwwQ0FBZSJ9