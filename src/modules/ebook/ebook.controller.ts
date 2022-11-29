import { Controller, Post, Body } from "@nestjs/common";
import { ebookDto } from "./Dto.book";
import { EbookService } from "./ebook.service";

@Controller()
export class EbookController{
    constructor(private readonly ebookService: EbookService){}

    @Post()
    async Create(@Body() data:ebookDto){
        try {
            return this.ebookService.EbookCreate(data)
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

}