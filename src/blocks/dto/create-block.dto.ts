import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @ApiProperty({
    example: 1,
    description: "Type ni ID si ",
  })
  @IsNumber()
  typeId: number;

  @ApiProperty({
    example: 1,
    description: "User ni ID si ",
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: 1,
    description: "Blockni uzining ID si ",
  })
  @IsNumber()
  parentId: number;

  @ApiProperty({
    example: 1,
    description: "prosta bilmadim bu nimaligini",
  })
  @IsNumber()
  order_index: number;
}
