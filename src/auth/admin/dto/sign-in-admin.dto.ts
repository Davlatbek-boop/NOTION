import { IsEmail, IsStrongPassword } from "class-validator"

export class SignInAdmin {
    @IsEmail()
    email: string
    // @IsStrongPassword()
    password: string
}