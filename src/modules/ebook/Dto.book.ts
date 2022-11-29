import { IsString } from "class-validator";

export class ebookDto{
    @IsString()
    id?: string

    @IsString()
    title: string

    @IsString()
    description: string

    @IsString()
    bar_code: string
 
}