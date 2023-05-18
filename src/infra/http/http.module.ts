import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { DocumentTypesController } from './controllers/documentTypes.controller';
import { CreateDocumentType } from '@app/use-cases/documentTypes/create-document-type';
import { DocumentModelsController } from './controllers/documentModels.controller';
import { CreateDocumentModel } from '@app/use-cases/documentModels/create-document-model';
import { JwtService } from '@nestjs/jwt';
import { FindDocumentTypes } from '@app/use-cases/documentTypes/find-many';
import { FindDocumentModels } from '@app/use-cases/documentModels/find-many';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentTypesController, DocumentModelsController],
  providers: [
    CreateDocumentType,
    CreateDocumentModel,
    JwtService,
    FindDocumentTypes,
    FindDocumentModels,
  ],
})
export class HTTPModule {}
