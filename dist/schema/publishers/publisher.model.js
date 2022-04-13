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
exports.PublisherModel = exports.Publisher = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const book_model_1 = require("../books/book.model");
let Publisher = class Publisher {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { description: "Unique identifier in the database" }),
    __metadata("design:type", String)
], Publisher.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, unique: true }),
    (0, type_graphql_1.Field)({ description: "Name of the publisher" }),
    __metadata("design:type", String)
], Publisher.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { description: "Year the publisher was founded" }),
    __metadata("design:type", Number)
], Publisher.prototype, "foundationYear", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [mongoose_1.default.Types.ObjectId], required: true }),
    __metadata("design:type", Array)
], Publisher.prototype, "bookIDs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [book_model_1.Book], { description: "Books published" }),
    __metadata("design:type", Array)
], Publisher.prototype, "books", void 0);
Publisher = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "All the information about a publisher" })
], Publisher);
exports.Publisher = Publisher;
exports.PublisherModel = (0, typegoose_1.getModelForClass)(Publisher);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYS9wdWJsaXNoZXJzL3B1Ymxpc2hlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0I7QUFDL0Isb0RBQTZEO0FBQzdELCtDQUF5RDtBQUN6RCxvREFBMEM7QUFHMUMsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQWlCckIsQ0FBQTtBQWZDO0lBREMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDOztxQ0FDOUQ7QUFJVjtJQUZDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEQsSUFBQSxvQkFBSyxFQUFDLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFLENBQUM7O3VDQUNwQztBQUlaO0lBRkMsSUFBQSxnQkFBSSxHQUFFO0lBQ04sSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDOztpREFDaEQ7QUFHdEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUMvQztBQUdqQjtJQURDLElBQUEsb0JBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLENBQUM7O3dDQUM3QztBQWhCRixTQUFTO0lBRHJCLElBQUEseUJBQVUsRUFBQyxFQUFFLFdBQVcsRUFBRSx1Q0FBdUMsRUFBRSxDQUFDO0dBQ3hELFNBQVMsQ0FpQnJCO0FBakJZLDhCQUFTO0FBbUJULFFBQUEsY0FBYyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsU0FBUyxDQUFDLENBQUEifQ==