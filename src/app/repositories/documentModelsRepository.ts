import { DocumentModelsProps } from '@app/entities/documentModels';

//It's like a contract and we use to inject dependencies
export abstract class DocumentModelsRepository {
  abstract create(documentModel: DocumentModelsProps): Promise<void>;
  abstract findManyByTypeId(typeId: string): Promise<DocumentModelsProps[]>;
}
