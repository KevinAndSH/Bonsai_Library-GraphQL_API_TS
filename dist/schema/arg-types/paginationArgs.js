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
exports.PaginationArgs = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let PaginationArgs = class PaginationArgs {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { defaultValue: 1 }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "page", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { defaultValue: 10 }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "amount", void 0);
PaginationArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], PaginationArgs);
exports.PaginationArgs = PaginationArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbkFyZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hL2FyZy10eXBlcy9wYWdpbmF0aW9uQXJncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUM7QUFDckMsK0NBQW1EO0FBR25ELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FRMUIsQ0FBQTtBQUxDO0lBRkMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxJQUFBLHFCQUFHLEVBQUMsQ0FBQyxDQUFDOzs0Q0FDSztBQUlaO0lBRkMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN4QyxJQUFBLHFCQUFHLEVBQUMsQ0FBQyxDQUFDOzs4Q0FDTztBQVBILGNBQWM7SUFEMUIsSUFBQSx1QkFBUSxHQUFFO0dBQ0UsY0FBYyxDQVExQjtBQVJZLHdDQUFjIn0=