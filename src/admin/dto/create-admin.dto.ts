import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class CreateAdminDto {
    @ApiProperty({
        example: "Fullname",
        description: "Admin fullnamesi"
    })
    @IsString()
    full_name: string

    @ApiProperty({
        example: "email@mail.uz",
        description: "Admin emaili"
    })
    @IsEmail()
    email: string

    @ApiProperty({
        example: "Uzbek1$t@n",
        description: "Admin paroli"
    })
    @IsStrongPassword()
    hashed_password: string
}
