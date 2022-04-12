import { AuthChecker } from "type-graphql";
import { MyContext } from "./context";

export const customAuthChecker: AuthChecker<MyContext> = ({ root, args, context, info }, roles) => {
  const userData = context.getUserDataFromReq(context.req)
  if (!userData) return false
  const userRole = userData.role
  console.log(userRole)
  return roles.includes(userRole)
}
