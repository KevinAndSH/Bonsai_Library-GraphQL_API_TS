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
exports.AuthPayload = exports.UserResolver = void 0;
const apollo_server_1 = require("apollo-server");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const type_graphql_1 = require("type-graphql");
const user_inputs_1 = require("./user.inputs");
const user_model_1 = require("./user.model");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
let UserResolver = class UserResolver {
    async signup({ username, email, password, passwordConfirm }) {
        if (password !== passwordConfirm)
            throw new apollo_server_1.ApolloError("Passwords don't match");
        const newUser = new user_model_1.UserModel({
            username,
            email,
            hashedPassword: bcryptjs_1.default.hashSync(password, 10),
            role: user_model_1.UserRole.VIEWER
        });
        return await newUser.save().catch(err => { throw err; });
    }
    async login({ email, password }) {
        const userData = await user_model_1.UserModel.findOne({ email });
        if (!(userData === null || userData === void 0 ? void 0 : userData.email))
            throw new apollo_server_1.ApolloError("E-mail address not registered");
        if (!bcryptjs_1.default.compareSync(password, userData.hashedPassword))
            throw new apollo_server_1.ApolloError("Wrong password");
        const token = jsonwebtoken_1.default.sign({ email, role: userData.role }, ACCESS_TOKEN_SECRET);
        return { token };
    }
    async askForEditorRole({ getUserDataFromReq, req }) {
        try {
            const userData = getUserDataFromReq(req);
            if (userData.role === user_model_1.UserRole.EDITOR)
                throw new apollo_server_1.ApolloError("User already has the editor role");
            const userToEdit = await user_model_1.UserModel.findOne({ email: userData.email });
            userToEdit.role = user_model_1.UserRole.EDITOR;
            await userToEdit.save();
            const token = jsonwebtoken_1.default.sign({ ...userData, role: user_model_1.UserRole.EDITOR }, ACCESS_TOKEN_SECRET);
            return { token };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(returns => user_model_1.User),
    __param(0, (0, type_graphql_1.Arg)("userData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputs_1.UserRegisterInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signup", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => AuthPayload),
    __param(0, (0, type_graphql_1.Arg)("loginData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputs_1.UserLoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Authorized)(user_model_1.UserRole.VIEWER, user_model_1.UserRole.EDITOR),
    (0, type_graphql_1.Mutation)(returns => AuthPayload),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "askForEditorRole", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => user_model_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
let AuthPayload = class AuthPayload {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthPayload.prototype, "token", void 0);
AuthPayload = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "Response with an Authentication token" })
], AuthPayload);
exports.AuthPayload = AuthPayload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXNvbHZlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hL3VzZXJzL3VzZXIucmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyx3REFBNkI7QUFDN0IsZ0VBQThCO0FBQzlCLCtDQUEyRjtBQUUzRiwrQ0FBa0U7QUFDbEUsNkNBQXlEO0FBRXpELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQTtBQUczRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLEtBQUssQ0FBQyxNQUFNLENBQWtCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFxQjtRQUM3RixJQUFJLFFBQVEsS0FBSyxlQUFlO1lBQUUsTUFBTSxJQUFJLDJCQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNoRixNQUFNLE9BQU8sR0FBRyxJQUFJLHNCQUFTLENBQUM7WUFDNUIsUUFBUTtZQUNSLEtBQUs7WUFDTCxjQUFjLEVBQUUsa0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLEVBQUUscUJBQVEsQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBR0QsS0FBSyxDQUFDLEtBQUssQ0FBbUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFrQjtRQUMvRCxNQUFNLFFBQVEsR0FBRyxNQUFNLHNCQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1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