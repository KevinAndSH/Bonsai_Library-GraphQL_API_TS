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
exports.UserRegisterInput = exports.UserLoginInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let UserLoginInput = class UserLoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserLoginInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UserLoginInput.prototype, "password", void 0);
UserLoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserLoginInput);
exports.UserLoginInput = UserLoginInput;
let UserRegisterInput = class UserRegisterInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "passwordConfirm", void 0);
UserRegisterInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserRegisterInput);
exports.UserRegisterInput = UserRegisterInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5pbnB1dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hL3VzZXJzL3VzZXIuaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFxRDtBQUNyRCwrQ0FBZ0Q7QUFJaEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQVExQixDQUFBO0FBTEM7SUFGQyxJQUFBLG9CQUFLLEdBQUU7SUFDUCxJQUFBLHlCQUFPLEdBQUU7OzZDQUNHO0FBSWI7SUFGQyxJQUFBLG9CQUFLLEdBQUU7SUFDUCxJQUFBLDJCQUFTLEVBQUMsQ0FBQyxDQUFDOztnREFDRztBQVBMLGNBQWM7SUFEMUIsSUFBQSx3QkFBUyxHQUFFO0dBQ0MsY0FBYyxDQVExQjtBQVJZLHdDQUFjO0FBVzNCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBZTdCLENBQUE7QUFaQztJQUZDLElBQUEsb0JBQUssR0FBRTtJQUNQLElBQUEsMkJBQVMsRUFBQyxDQUFDLENBQUM7O21EQUNHO0FBSWhCO0lBRkMsSUFBQSxvQkFBSyxHQUFFO0lBQ1AsSUFBQSx5QkFBTyxHQUFFOztnREFDRztBQUliO0lBRkMsSUFBQSxvQkFBSyxHQUFFO0lBQ1AsSUFBQSwyQkFBUyxFQUFDLENBQUMsQ0FBQzs7bURBQ0c7QUFHaEI7SUFEQyxJQUFBLG9CQUFLLEdBQUU7OzBEQUNlO0FBZFosaUJBQWlCO0lBRDdCLElBQUEsd0JBQVMsR0FBRTtHQUNDLGlCQUFpQixDQWU3QjtBQWZZLDhDQUFpQiJ9