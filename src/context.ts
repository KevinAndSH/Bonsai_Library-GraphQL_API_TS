import jwt from "jsonwebtoken"

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

export interface MyContext {
  getUserDataFromReq?: Function
}

const context = ({ req }: any) => {
  const ctx: MyContext = {}

  ctx.getUserDataFromReq = () => {
    const token: string|null = req.headers?.authorization?.replace("Bearer ", "") || null
    return token && jwt.verify(token, ACCESS_TOKEN_SECRET)
  }
  
  return ctx
}

export default context
