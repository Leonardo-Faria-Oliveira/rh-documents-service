import { DocumentTypes, DocumentTypesProps } from '@app/entities/documentTypes';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { Injectable } from '@nestjs/common';

//Admins request interface, is what we need from user to create an admin, but in domain layer
interface CreateDocumentTypeRequest {
  name: string;
  content: string;
}

//Admins response interface, is what we can return to user when he creates an admin, but in domain layer
interface CreateDocumentTypeResponse {
  documentType: DocumentTypesProps;
}

@Injectable()
export class CreateDocumentType {
  //Dependencies injection
  constructor(private documentTypesRepository: DocumentTypesRepository) {}

  async execute(
    request: CreateDocumentTypeRequest,
  ): Promise<CreateDocumentTypeResponse> {
    const { name, content } = request;

    //Verify and throws errors
    if (!name) {
      throw new Error('Document type should have a name');
    }
    if (!content) {
      throw new Error('Document type should have a content');
    }

    const documentType = new DocumentTypes({
      name: name,
      content: content,
    });

    //Creates an admin
    await this.documentTypesRepository.create(documentType);

    return {
      documentType,
    };
  }
}
