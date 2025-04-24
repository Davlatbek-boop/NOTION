import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Firstname",
    description: "Foylanuvchi firstnamesi",
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    example: "Lastname",
    description: "Foydalanuvchi lastnamesi",
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: "email@mail.uz",
    description: "Foydalanuvchi emaili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "Uzbek1$t@n",
    description: "Foydalanuvchi paroli",
  })
  // @IsStrongPassword()
  hashed_password: string;

  @ApiProperty({
    example: "file/path/img.png",
    description: "Foydalanuvchi rasmi fayl yo'li",
  })
  @IsString()
  photo: string;
}
