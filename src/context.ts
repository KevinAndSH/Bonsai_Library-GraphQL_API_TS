import { RequestOptions } from "http"
import jwt from "jsonwebtoken"
import { getDataLoaders, Loaders } from "./schema/dataloaders"

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

export interface MyContext {
  req?: RequestOptions
  getUserDataFromReq?: Function
  dataLoaders?: Loaders
}

const context = ({ req }: any) => {
  const ctx: MyContext = {}

  ctx.req = req

  ctx.getUserDataFromReq = (req: RequestOptions) => {
    const token: string|null = (req.headers?.authorization)?.toString().replace("Bearer ", "") || null
    return token && jwt.verify(token, ACCESS_TOKEN_SECRET)
  }
  
  ctx.dataLoaders = getDataLoaders()
  
  return ctx
}

export default context
