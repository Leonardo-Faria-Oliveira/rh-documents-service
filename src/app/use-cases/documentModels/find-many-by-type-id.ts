import { DocumentModelsProps } from '@app/entities/documentModels';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { Injectable } from '@nestjs/common';

interface FindManyByTypeIdResponse {
  documentModels: DocumentModelsProps[];
}

@Injectable()
export class FindManyByTypeId {
  //Dependencies injection
  constructor(private documentModelsRepository: DocumentModelsRepository) {}

  async execute(typeId: string): Promise<FindManyByTypeIdResponse> {
    if (!typeId) {
      throw new Error('Models has a type identification');
    }

    //Get the document models
    const documentModels = await this.documentModelsRepository.findManyByTypeId(
      typeId,
    );
    // console.log(documentModels[0])
    return {
      documentModels,
    };
  }
}
