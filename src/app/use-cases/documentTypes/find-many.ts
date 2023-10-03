import { DocumentTypesProps } from '@app/entities/documentTypes';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { Injectable } from '@nestjs/common';

interface FindManyDocumentTypesResponse {
  documenTypes: DocumentTypesProps[];
}

@Injectable()
export class FindDocumentTypes {
  //Dependencies injection
  constructor(private documentTypesRepository: DocumentTypesRepository) {}

  async execute(): Promise<FindManyDocumentTypesResponse> {
    //Get the document types
    const documenTypes = await this.documentTypesRepository.findMany();

    return {
      documenTypes,
    };
  }
}
