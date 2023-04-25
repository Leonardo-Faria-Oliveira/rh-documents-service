import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { DocumentTypesController } from './controllers/documentTypes.controller';
import { CreateDocumentType } from '@app/use-cases/documentTypes/create-document-type';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentTypesController],
  providers: [CreateDocumentType],
})
export class HTTPModule {}
