import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { PrismaDocumentTypesRepository } from './prisma/repositories/prisma-document-types-repository';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { PrismaDocumentModelsRepository } from './prisma/repositories/prisma-document-models-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: DocumentTypesRepository,
      useClass: PrismaDocumentTypesRepository,
    },
    {
      provide: DocumentModelsRepository,
      useClass: PrismaDocumentModelsRepository,
    },
  ],
  exports: [DocumentTypesRepository, DocumentModelsRepository],
})
export class DatabaseModule {}
