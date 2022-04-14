import { getModelForClass, prop } from "@typegoose/typegoose"
import { Field, ObjectType, registerEnumType } from "type-graphql"

@ObjectType({ description: "A registered user of our service" })
export class User {
  @prop({ trim: true, required: true })
  @Field()
  username: string

  @prop({ trim: true, required: true })
  @Field()
  email: string

  @prop({ required: true })
  hashedPassword: string

  @prop({ type: () => Number, required: true })
  @Field(type => UserRole)
  role: UserRole
}

export enum UserRole {
  VIEWER = 1,
  EDITOR = 2
}

registerEnumType(UserRole, {
  name: "UserRole",
  description: "User's role",
  valuesConfig: {
    VIEWER: { description: "Can view content" },
    EDITOR: { description: "Can edit content" }
  }
})

export const UserModel = getModelForClass(User)
