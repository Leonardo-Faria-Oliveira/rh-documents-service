import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { PrismaDocumentTypesRepository } from './prisma/repositories/prisma-document-types-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: DocumentTypesRepository,
      useClass: PrismaDocumentTypesRepository,
    },
  ],
  exports: [DocumentTypesRepository],
})
export class DatabaseModule {}
