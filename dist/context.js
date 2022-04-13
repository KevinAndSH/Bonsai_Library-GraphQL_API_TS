"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const context = ({ req }) => {
    const ctx = {};
    ctx.req = req;
    ctx.getUserDataFromReq = (req) => {
        var _a, _b;
        const token = ((_b = ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization)) === null || _b === void 0 ? void 0 : _b.toString().replace("Bearer ", "")) || null;
        return token && jsonwebtoken_1.default.verify(token, ACCESS_TOKEN_SECRET);
    };
    return ctx;
};
exports.default = context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0VBQThCO0FBRTlCLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQTtBQU8zRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFPLEVBQUUsRUFBRTtJQUMvQixNQUFNLEdBQUcsR0FBYyxFQUFFLENBQUE7SUFFekIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7SUFDYixHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFtQixFQUFFLEVBQUU7O1FBQy9DLE1BQU0sS0FBSyxHQUFnQixDQUFBLE1BQUEsQ0FBQyxNQUFBLEdBQUcsQ0FBQyxPQUFPLDBDQUFFLGFBQWEsQ0FBQywwQ0FBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsS0FBSSxJQUFJLENBQUE7UUFDbEcsT0FBTyxLQUFLLElBQUksc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUE7SUFDeEQsQ0FBQyxDQUFBO0lBRUQsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDLENBQUE7QUFFRCxrQkFBZSxPQUFPLENBQUEifQ==