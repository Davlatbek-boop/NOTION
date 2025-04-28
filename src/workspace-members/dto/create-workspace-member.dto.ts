import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorkspaceMemberDto {
  
  @ApiProperty({
    example: 1,
    description: 'Workspace ID (which workspace the user belongs to)',
  })
  @IsNumber()
  @IsNotEmpty()
  workspaceId: number;

  @ApiProperty({
    example: 2,
    description: 'User ID (which user is added to the workspace)',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: true,
    description: 'Is the user admin of this workspace?',
    default: false
  })
  @IsBoolean()
  @IsNotEmpty()
  is_admin: boolean;
}
