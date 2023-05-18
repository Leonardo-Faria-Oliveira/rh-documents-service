import { CreateDocumentModel } from './create-document-model';
import { InMemoryDocumentModelsRepository } from '@test/repositories/in-memory-document-models-repository';

describe('Create a document model', () => {
  it('should be able to create a document model', async () => {
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

    expect(documentModelsRepository.documentModels).toHaveLength(1);
  });

  it('should not be able to create a document model without a title', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

    await expect(
      createDocumentModel.execute({
        title: null,
        fields: '[]',
        text: '[]',
        digitalSignature: false,
        typeId: 'teste',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to create a document model without any field', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

    await expect(
      createDocumentModel.execute({
        title: 'Assuntos disciplinares',
        fields: null,
        text: '[]',
        digitalSignature: false,
        typeId: 'teste',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to create a document model without any text', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

    await expect(
      createDocumentModel.execute({
        title: 'Assuntos disciplinares',
        fields: '[]',
        text: null,
        digitalSignature: false,
        typeId: 'teste',
      }),
    ).rejects.toThrow();
  });
  it('should not be able to create a document model without set what type of signature', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

    await expect(
      createDocumentModel.execute({
        title: 'Assuntos disciplinares',
        fields: '[]',
        text: '[]',
        digitalSignature: null,
        typeId: 'teste',
      }),
    ).rejects.toThrow();
  });
  it('should not be able to create a document model without a type', async () => {
    const documentModelsRepository = new InMemoryDocumentModelsRepository();
    const createDocumentModel = new CreateDocumentModel(
      documentModelsRepository,
    );

    await expect(
      createDocumentModel.execute({
        title: 'Assuntos disciplinares',
        fields: '[]',
        text: '[]',
        digitalSignature: false,
        typeId: null,
      }),
    ).rejects.toThrow();
  });
});
