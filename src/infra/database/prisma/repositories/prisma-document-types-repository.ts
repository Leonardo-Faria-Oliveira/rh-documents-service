import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { DocumentTypesProps } from '@app/entities/documentTypes';
import { PrismaDocumentTypesMapper } from '../mappers/prisma-document-types-mapper';

@Injectable()
export class PrismaDocumentTypesRepository implements DocumentTypesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(documentTypes: DocumentTypesProps): Promise<void> {
    // console.log(documentTypes.id);
    await this.prismaService.documentTypes.create({
      data: {
        id: documentTypes.id,
        name: documentTypes.name,
        content: documentTypes.content,
      },
    });
  }

  async findMany(): Promise<DocumentTypesProps[]> {
    const documentTypes = await this.prismaService.documentTypes.findMany({
      select: {
        id: true,
        content: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        active: true,
      },
    });

    return documentTypes.map((documentType) => {
      return PrismaDocumentTypesMapper.toDomain(documentType);
    });
  }
}
