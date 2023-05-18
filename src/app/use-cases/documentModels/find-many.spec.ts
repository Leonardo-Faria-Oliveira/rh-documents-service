import { CreateDocumentModel } from './create-document-model';
import { InMemoryDocumentModelsRepository } from '@test/repositories/in-memory-document-models-repository';

describe('Gets all the document models', () => {
  it('should be able to get all the document models', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

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

    const documentModels = await documentModelsRepository.findMany();

    expect(documentModels).toHaveLength(2);
  });
});
