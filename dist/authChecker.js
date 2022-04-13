"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAuthChecker = void 0;
const customAuthChecker = ({ root, args, context, info }, roles) => {
    const userData = context.getUserDataFromReq(context.req);
    if (!userData)
        return false;
    const userRole = userData.role;
    console.log(userRole);
    return roles.includes(userRole);
};
exports.customAuthChecker = customAuthChecker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENoZWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aENoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSxpQkFBaUIsR0FBMkIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQ2hHLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDeEQsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUMzQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQU5ZLFFBQUEsaUJBQWlCLHFCQU03QiJ9