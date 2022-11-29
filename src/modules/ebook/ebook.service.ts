import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ebookDto } from './Dto.book';

@Injectable()
export class EbookService {
  constructor(private prisma: PrismaService) {}

  async EbookCreate(data: ebookDto): Promise<ebookDto> {
    const ebookExists = await this.prisma.ebook.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (ebookExists) {
      throw new Error('The Ebook already exists');
    }

    const ebook = await this.prisma.ebook.create({
      data,
    });
    return ebook;
  }
}
