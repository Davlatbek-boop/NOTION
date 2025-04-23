import { IsEmail, IsStrongPassword } from "class-validator"

export class SignInUser {
    @IsEmail()
    email: string
    // @IsStrongPassword()
    password: string
}