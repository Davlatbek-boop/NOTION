import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsDate, IsObject } from 'class-validator';

export class CreateDeviceDto {
  @ApiProperty({
    example: 1,
    description: 'ID of the user that owns the device',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: 'iPhone 12',
    description: 'Name of the device',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'New York',
    description: 'Location where the device was last used',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: { model: 'iPhone 12', os: 'iOS' },
    description: 'Additional device information',
  })
  @IsObject()
  @IsNotEmpty()
  information: object;
}
