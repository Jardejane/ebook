import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ebookDto {
  @IsString()
  id?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  crp: string;

  @ApiProperty()
  @IsString()
  password: string
}
