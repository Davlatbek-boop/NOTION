import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePermissionDto {
  @ApiProperty({
    example: "s",
    description: "Permission Label",
  })
  @IsString()
  label: string;

  @ApiProperty({
    example: "rabota",
    description: "Permission namesi",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "icon",
    description: "Permission description",
  })
  @IsString()

  description: string;
}
