import { Module } from '@nestjs/common';
import { EbookModule } from './modules/ebook/ebook.modules';

@Module({
  imports: [EbookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
