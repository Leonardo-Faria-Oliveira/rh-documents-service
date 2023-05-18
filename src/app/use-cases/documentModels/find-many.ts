import { DocumentModelsProps } from '@app/entities/documentModels';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { Injectable } from '@nestjs/common';

interface FindManyDocumentModelsResponse {
  documenModels: DocumentModelsProps[];
}

@Injectable()
export class FindDocumentModels {
  //Dependencies injection
  constructor(private documentModelsRepository: DocumentModelsRepository) {}

  async execute(): Promise<FindManyDocumentModelsResponse> {
    //Get the document models
    const documenModels = await this.documentModelsRepository.findMany();

    return {
      documenModels,
    };
  }
}
