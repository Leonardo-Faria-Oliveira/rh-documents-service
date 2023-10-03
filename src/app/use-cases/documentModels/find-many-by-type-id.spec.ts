import { CreateDocumentModel } from './create-document-model';
import { InMemoryDocumentModelsRepository } from '@test/repositories/in-memory-document-models-repository';
import { FindManyByTypeId } from './find-many-by-type-id';

describe('Gets all the document models by type id', () => {
  it('should be able to get all the document models by type id', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );
    const findManyByTypeId = new FindManyByTypeId(documentModelsRepository);

    await createDocumentModel.execute({
      title: 'Assuntos disciplinares',
      fields: '[]',
      text: '[]',
      digitalSignature: false,
      typeId: 'teste',
    });

    await createDocumentModel.execute({
      title: 'Medidas disciplinares',
      fields: '[]',
      text: '[]',
      digitalSignature: false,
      typeId: 'teste',
    });

    const { documentModels } = await findManyByTypeId.execute('teste');

    expect(documentModels).toHaveLength(2);
  });
  it('should not be able to get the document models without an id', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const findManyByTypeId = new FindManyByTypeId(documentModelsRepository);

    await expect(findManyByTypeId.execute(null)).rejects.toThrow();
  });
});
