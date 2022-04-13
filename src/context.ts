import { MongooseDataloaderFactory } from "graphql-dataloader-mongoose"
import { RequestOptions } from "http"
import jwt from "jsonwebtoken"

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

export interface MyContext {
  req?: RequestOptions
  getUserDataFromReq?: Function
  dataloaderFactory?: MongooseDataloaderFactory
}

const context = ({ req }: any) => {
  const ctx: MyContext = {}

  ctx.req = req
  ctx.dataloaderFactory = new MongooseDataloaderFactory()
  ctx.getUserDataFromReq = (req: RequestOptions) => {
    const token: string|null = (req.headers?.authorization)?.toString().replace("Bearer ", "") || null
    return token && jwt.verify(token, ACCESS_TOKEN_SECRET)
  }
  
  return ctx
}

export default context
