import { InMemoryDocumentTypesRepository } from '@test/repositories/in-memory-document-type-repository';
import { CreateDocumentType } from './create-document-type';

describe('Create a document type', () => {
  it('should be able to create a document type', async () => {
    const documentTypesRepository = new InMemoryDocumentTypesRepository();
    const createDocumentType = new CreateDocumentType(documentTypesRepository);

    await createDocumentType.execute({
      name: 'Medidas disciplinares',
      content: '{}',
    });

    expect(documentTypesRepository.documentTypes).toHaveLength(1);
  });

  it('should not be able to create a document type without a name', async () => {
    const documentTypesRepository = new InMemoryDocumentTypesRepository();
    const createDocumentType = new CreateDocumentType(documentTypesRepository);

    await expect(
      createDocumentType.execute({
        name: null,
        content: '{}',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to create a document type without a content', async () => {
    const documentTypesRepository = new InMemoryDocumentTypesRepository();
    const createDocumentType = new CreateDocumentType(documentTypesRepository);

    await expect(
      createDocumentType.execute({
        name: 'Medidas disciplinares',
        content: null,
      }),
    ).rejects.toThrow();
  });
});
