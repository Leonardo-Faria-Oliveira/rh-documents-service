import { DocumentTypesProps } from '@app/entities/documentTypes';

//It's like a contract and we use to inject dependencies
export abstract class DocumentTypesRepository {
  abstract create(documentType: DocumentTypesProps): Promise<void>;
}
