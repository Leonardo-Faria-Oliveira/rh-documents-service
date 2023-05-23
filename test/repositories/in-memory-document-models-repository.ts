import { DocumentModelsProps } from '@app/entities/documentModels';
import { DocumentModelsRepository } from '@app/repositories/documentModelsRepository';

export class InMemoryDocumentModelsRepository
  implements DocumentModelsRepository
{
  public documentModels: DocumentModelsProps[] = [];

  async create(documentModel: DocumentModelsProps) {
    this.documentModels.push(documentModel);
  }

  async findManyByTypeId(typeId: string): Promise<DocumentModelsProps[]> {
    const documenModels = this.documentModels.filter((model) => {
      return model.typeId === typeId ? true : false;
    });
    return documenModels;
  }
}
