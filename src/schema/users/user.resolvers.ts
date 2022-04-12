import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Arg, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { UserInput, UserRegisterInput } from "./user.inputs";
import { User, UserModel, UserRole } from "./user.model";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

@Resolver(of => User)
export class UserResolver {
  @Mutation(returns => User)
  async signup(@Arg("userData") { username, email, password, passwordConfirm }: UserRegisterInput) {
    if (password !== passwordConfirm) throw Error("Passwords don't match")
    const newUser = new UserModel({
      username,
      email,
      hashedPassword: bcrypt.hashSync(password, 10),
      role: UserRole.VIEWER
    })
    return await newUser.save().catch(err => { throw err })
  }

  @Mutation(returns => AuthPayload)
  async login(@Arg("loginData") { email, password }: UserInput) {
    const userData = await UserModel.findOne({ email })
    if (!userData?.email) throw Error("E-mail address not registered")
    if (!bcrypt.compareSync(password, userData.hashedPassword)) throw Error("Wrong password")
    const token = jwt.sign({ email }, ACCESS_TOKEN_SECRET)
    return { token }
  }
}

@ObjectType({ description: "Response with an Authentication token" })
class AuthPayload {
  @Field()
  token: string
}
