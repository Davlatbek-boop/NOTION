import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTeamSpaceDto {
  @ApiProperty({
    description: 'TeamSpace nomi',
    example: 'Marketing Team',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'TeamSpace tavsifi',
    example: 'Ushbu TeamSpace marketing bo‘limi uchun mo‘ljallangan.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'TeamSpace uchun ikonka URL yoki nomi',
    example: '📈',
  })
  @IsString()
  icon: string;

  @ApiProperty({
    description: 'Bog‘langan Workspace ID raqami',
    example: 1,
  })
  @IsNumber()
  workspaceId: number;

  @ApiProperty({
    description: 'TeamSpace yaratuvchi foydalanuvchi IDsi',
    example: 42,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'TeamSpace uchun ruxsat (permission) IDsi',
    example: 3,
  })
  @IsNumber()
  permissionId: number;
}
