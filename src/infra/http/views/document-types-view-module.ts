import { DocumentTypesProps } from '@app/entities/documentTypes';

export class DocumentTypesViewModule {
  static manyDocumentTypesToHTTP(documentType: DocumentTypesProps) {
    return {
      id: documentType.id,
      name: documentType.name,
      content: JSON.parse(documentType.content),
    };
  }
}
