import { getModelForClass, prop } from "@typegoose/typegoose"
import { ObjectType } from "type-graphql"

@ObjectType()
export class User {
  @prop()
  username: string

  @prop()
  hashedPassword: string
}

export const UserModel = getModelForClass(User)
