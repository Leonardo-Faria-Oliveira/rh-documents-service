import {
  DocumentModels,
  DocumentModelsProps,
} from '@app/entities/documentModels';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';
import { Injectable } from '@nestjs/common';

//Admins request interface, is what we need from user to create an admin, but in domain layer
interface CreateDocumentModelRequest {
  title: string;
  text: string;
  fields: string;
  digitalSignature: boolean;
  typeId: string;
}

//Admins response interface, is what we can return to user when he creates an admin, but in domain layer
interface CreateDocumentModelResponse {
  documentModel: DocumentModelsProps;
}

@Injectable()
export class CreateDocumentModel {
  //Dependencies injection
  constructor(private documentModelsRepository: DocumentModelsRepository) {}

  async execute(
    request: CreateDocumentModelRequest,
  ): Promise<CreateDocumentModelResponse> {
    const { title, fields, text, digitalSignature, typeId } = request;

    //Verify and throws errors
    if (!title) {
      throw new Error('Document model should have a title');
    }
    if (!fields) {
      throw new Error('Document model should have fields');
    }
    if (!text) {
      throw new Error('Document model should have a text');
    }
    if (!digitalSignature) {
      throw new Error('Document model should have a signature');
    }
    if (!typeId) {
      throw new Error('Document model should have a type');
    }

    const documentModel = new DocumentModels({
      title: title,
      fields: fields,
      text: text,
      digitalSignature: digitalSignature,
      typeId: typeId,
    });

    //Creates an admin
    await this.documentModelsRepository.create(documentModel);

    return {
      documentModel,
    };
  }
}
