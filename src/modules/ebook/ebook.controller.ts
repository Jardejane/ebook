import { Controller, Post, Body, Get, Param, Put } from "@nestjs/common";
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

    @Get()
    async GetAll(){
        try {
            return await this.ebookService.EbookGetAll()
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
        
    }

    @Get(':id')
    async GetId(@Param('id') id: string){
        try {
            return this.ebookService.EbookGetId(id)
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
        
    }

    @Put(':id')
    async Update(@Param('id') id: string, @Body() data: ebookDto){
        try {
            return this.ebookService.EbookUpdate(id, data)
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
        
    }



}