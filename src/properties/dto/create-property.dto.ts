import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePropertyDto {
  @ApiProperty({
    example: "property nomi",
    description: "Qanday property"
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "description nomi",
    description: "Qanday description"
  })
  @IsString()
  description: string;
}
