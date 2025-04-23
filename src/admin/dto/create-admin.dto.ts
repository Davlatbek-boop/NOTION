import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class CreateAdminDto {
    @IsString()
    full_name: string
    @IsEmail()
    email: string
    @IsStrongPassword()
    hashed_password: string
}
