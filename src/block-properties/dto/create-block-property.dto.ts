import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @ApiProperty({
    example: 1,
    description: "Blockning ID si",
  })
  @IsNumber()
  blockId: number;

  @ApiProperty({
    example: 1,
    description: "Propertyning ID si",
  })
  @IsNumber()
  propertyId: number;

  @ApiProperty({
    example: "Izoh",
    description: "bog'lanishga izoh berish",
  })
  @IsString()
  value: string;
}
