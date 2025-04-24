import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypeDto {
  @ApiProperty({
    example: "Type nomi",
    description: "Qanday Type",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Type uchun description nomi",
    description: "description izoh",
  })
  @IsString()
  description: string;
}
