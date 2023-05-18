import { InMemoryDocumentTypesRepository } from '@test/repositories/in-memory-document-types-repository';
import { CreateDocumentType } from './create-document-type';

describe('Gets all the document types', () => {
  it('should be able to get all the document types', async () => {
    const documentTypesRepository = new InMemoryDocumentTypesRepository();
    const createDocumentType = new CreateDocumentType(documentTypesRepository);

    await createDocumentType.execute({
      name: 'Medidas disciplinares',
      content: '{}',
    });

    await createDocumentType.execute({
      name: 'Uso de material corporativo',
      content: '{}',
    });

    const documentTypes = await documentTypesRepository.findMany();

    expect(documentTypes).toHaveLength(2);
  });
});
