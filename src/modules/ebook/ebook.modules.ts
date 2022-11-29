import { Module } from '@nestjs/common';
import { EbookService } from './ebook.service';
import { EbookController } from './ebook.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [EbookController],
  providers: [EbookService, PrismaService],
})
export class EbookModule {}
