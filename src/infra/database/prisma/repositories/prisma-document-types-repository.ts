import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { DocumentTypesProps } from '@app/entities/documentTypes';

@Injectable()
export class PrismaDocumentTypesRepository implements DocumentTypesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(documentTypes: DocumentTypesProps): Promise<void> {
    console.log(documentTypes.id);
    await this.prismaService.documentTypes.create({
      data: {
        id: documentTypes.id,
        name: documentTypes.name,
        content: documentTypes.content,
      },
    });
  }
}
