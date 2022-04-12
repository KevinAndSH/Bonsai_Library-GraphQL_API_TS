import { IsEmail, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from "./user.model";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string

  @Field()
  @MinLength(8)
  password: string
}

@InputType()
export class UserRegisterInput extends UserInput {
  @Field()
  @MinLength(1)
  username: string

  @Field()
  passwordConfirm: string
}
