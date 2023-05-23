import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { DocumentModelsProps } from '@app/entities/documentModels';
import { PrismaDocumentModelsMapper } from '../mappers/prisma-document-models-mapper';

@Injectable()
export class PrismaDocumentModelsRepository
  implements DocumentModelsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(documentModels: DocumentModelsProps): Promise<void> {
    console.log(documentModels.id);
    await this.prismaService.documentModels.create({
      data: {
        id: documentModels.id,
        title: documentModels.title,
        fields: documentModels.fields,
        text: documentModels.text,
        digitalSignature: documentModels.digitalSignature,
        typeId: documentModels.typeId,
      },
    });
  }

  async findManyByTypeId(typeId: string): Promise<DocumentModelsProps[]> {
    const documentModels = await this.prismaService.documentModels.findMany({
      select: {
        id: true,
        fields: true,
        text: true,
        digitalSignature: true,
        active: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        typeId: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        typeId: typeId,
        active: true,
      },
    });

    return documentModels.map((documentModel) => {
      return PrismaDocumentModelsMapper.toDomain(documentModel);
    });
  }
}
