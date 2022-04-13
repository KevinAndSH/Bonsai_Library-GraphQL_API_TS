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
exports.UserModel = exports.UserRole = exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
let User = class User {
};
__decorate([
    (0, typegoose_1.prop)({ trim: true, required: true, unique: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true, required: true, unique: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "hashedPassword", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => Number, required: true }),
    (0, type_graphql_1.Field)(type => UserRole),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "A registered user of our service" })
], User);
exports.User = User;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["VIEWER"] = 1] = "VIEWER";
    UserRole[UserRole["EDITOR"] = 2] = "EDITOR";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
(0, type_graphql_1.registerEnumType)(UserRole, {
    name: "UserRole",
    description: "User's role",
    valuesConfig: {
        VIEWER: { description: "Can view content" },
        EDITOR: { description: "Can edit content" }
    }
});
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWEvdXNlcnMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkQ7QUFDN0QsK0NBQWtFO0FBR2xFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FlaEIsQ0FBQTtBQVpDO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsRCxJQUFBLG9CQUFLLEdBQUU7O3NDQUNRO0FBSWhCO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsRCxJQUFBLG9CQUFLLEdBQUU7O21DQUNLO0FBR2I7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzRDQUNIO0FBSXRCO0lBRkMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUMsSUFBQSxvQkFBSyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQ0FDVjtBQWRILElBQUk7SUFEaEIsSUFBQSx5QkFBVSxFQUFDLEVBQUUsV0FBVyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7R0FDbkQsSUFBSSxDQWVoQjtBQWZZLG9CQUFJO0FBaUJqQixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDbEIsMkNBQVUsQ0FBQTtJQUNWLDJDQUFVLENBQUE7QUFDWixDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7QUFFRCxJQUFBLCtCQUFnQixFQUFDLFFBQVEsRUFBRTtJQUN6QixJQUFJLEVBQUUsVUFBVTtJQUNoQixXQUFXLEVBQUUsYUFBYTtJQUMxQixZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO0tBQzVDO0NBQ0YsQ0FBQyxDQUFBO0FBRVcsUUFBQSxTQUFTLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQSJ9