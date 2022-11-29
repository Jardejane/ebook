import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ebookDto {
  @IsString()
  id?: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  bar_code: string;
}
