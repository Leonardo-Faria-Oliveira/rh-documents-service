import { DocumentModelsProps } from '@app/entities/documentModels';

export class DocumentModelsViewModule {
  static manyDocumentModelsToHTTP(documentModel: DocumentModelsProps) {
    return {
      id: documentModel.id,
      title: documentModel.title,
      fields: JSON.parse(documentModel.fields),
      text: JSON.parse(documentModel.text),
      digitalSignature: documentModel.digitalSignature,
      active: documentModel.active,
      createdAt: documentModel.createdAt,
    };
  }
}
