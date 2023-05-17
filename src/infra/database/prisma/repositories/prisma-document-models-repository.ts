import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { DocumentModelsProps } from '@app/entities/documentModels';

@Injectable()
export class PrismaDocumentModelsRepository
  implements DocumentModelsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(documentModels: DocumentModelsProps): Promise<void> {
    // console.log(documentTypes.id);
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
}
