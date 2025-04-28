import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'Developers', description: 'Group name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://cdn.icon.com/group.png', description: 'Group icon URL' })
  @IsString()
  @IsNotEmpty()
  icon: string;

  @ApiProperty({ example: 'A group for all developers', description: 'Group description' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
