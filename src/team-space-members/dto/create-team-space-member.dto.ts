import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber } from "class-validator";

export class CreateTeamSpaceMemberDto {

  @ApiProperty({
    example: 101,
    description: "ID of the user who is a member of the team space",
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: 202,
    description: "ID of the team space to which the user belongs",
  })
  @IsNumber()
  teamSpaceId: number;

  @ApiProperty({
    example: true,
    description: "Flag to indicate whether the user is a member of the team space",
  })
  @IsBoolean()
  is_member: boolean;
}
