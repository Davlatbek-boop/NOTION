import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateWorkspaceDto {
  @ApiProperty({
    example: 1,
    description: "Workspace userga bog'langan ID raqami",
  })
  @IsNumber()
  userId: number;
  @ApiProperty({
    example: "rabota",
    description: "Workspace namesi",
  })
  @IsString()
  name: string;
  @ApiProperty({
    example: "icon",
    description: "Workspace icon",
  })
  @IsString()
  icon: string;

  @ApiProperty({
    example: "category",
    description: "Workspace category",
  })

  @ApiProperty({
    example: "category",
    description: "Workspace category",
  })
  @IsString()
  category: string;

  @ApiProperty({
    example: "menegement",
    description: "Workspace menegement",
  })
  @IsString()
  manegement: string;
}
