import { DocumentTypes } from './documentTypes';

describe('Document Types', () => {
  it('should be able to create a document type', () => {
    const documentType = new DocumentTypes({
      name: 'Medidas disciplinares',
      content: '{}',
    });
    expect(documentType).toBeTruthy();
  });
});
