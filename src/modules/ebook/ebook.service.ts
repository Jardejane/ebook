import { IsString } from 'class-validator';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ebookDto } from './Dto.book';

@Injectable()
export class EbookService {
  constructor(private prisma: PrismaService) {}

  async EbookCreate(data: ebookDto): Promise<ebookDto> {
    const ebookExists = await this.prisma.ebook.findFirst({
      where: {
        email: data.email,
      },
    });

    if (ebookExists) {
      throw new NotFoundException('The Ebook already exists');
    }

    const ebook = await this.prisma.ebook.create({
      data,
    });
    return ebook;
  }

  async EbookGetAll(): Promise<ebookDto[]> {
    return this.prisma.ebook.findMany();
  }

  async EbookGetId(id: string): Promise<ebookDto> {
    const EbookId = await this.prisma.ebook.findUnique({
      where: {
        id,
      },
    });

    if (!EbookId) {
      console.log(Error);
      throw new NotFoundException('Book does not exists!');
    }

    return EbookId;
  }

  async EbookUpdate(id: string, data: ebookDto): Promise<ebookDto> {
    const EbookId = await this.prisma.ebook.findUnique({
      where: {
        id,
      },
    });

    if (!EbookId) {
      console.log(Error);
      throw new NotFoundException('Book does not exists!');
    }

    return await this.prisma.ebook.update({
      data,
      where: {
        id,
      },
    });
  }

  async EbookDelete(id: string) {
    const EbookId = await this.prisma.ebook.findUnique({
      where: {
        id,
      },
    });

    if (!EbookId) {
      console.log(Error);
      throw new NotFoundException('Book does not exists!');
    } else {
      await this.prisma.ebook.delete({
        where: {
          id,
        },
      });
      return 'successfully deleted';
    }
  }
}
