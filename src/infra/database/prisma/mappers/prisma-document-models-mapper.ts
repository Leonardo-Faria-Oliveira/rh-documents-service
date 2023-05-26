import { DocumentModels, TypeInModel } from '@app/entities/documentModels';
import { DocumentModels as rawDocumentModels } from '@prisma/client';

export interface rawDocumentModelsWithType extends rawDocumentModels {
  documentType: TypeInModel;
}

export class PrismaDocumentModelsMapper {
  //Here we take data from persistence layer ans mask to domain layer
  static toDomain(raw: rawDocumentModelsWithType): DocumentModels {
    // console.log(raw.documentType.name);
    return new DocumentModels(
      {
        title: raw.title,
        text: raw.text,
        fields: raw.fields,
        digitalSignature: raw.digitalSignature,
        createdAt: raw.createdAt,
        typeId: raw.typeId,
      },
      raw.id,
      {
        name: raw.documentType.name,
        content: raw.documentType.content,
      },
    );
  }
}
