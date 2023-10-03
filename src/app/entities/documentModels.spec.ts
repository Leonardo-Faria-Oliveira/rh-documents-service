import { DocumentModels } from './documentModels';

describe('Document Models', () => {
  it('should be able to create a document model', () => {
    const documentModel = new DocumentModels({
      title: 'Titulo',
      fields: '{}',
      digitalSignature: true,
      text: 'Texto',
      typeId: 'g33ttgtee',
    });
    expect(documentModel).toBeTruthy();
  });
});
