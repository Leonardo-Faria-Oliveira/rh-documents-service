import { DocumentModels } from '@app/entities/documentModels';
import { DocumentModels as rawDocumentModels } from '@prisma/client';

export class PrismaDocumentModelsMapper {
  //Here we take data from persistence layer ans mask to domain layer
  static toDomain(raw: rawDocumentModels): DocumentModels {
    // const companyRaw =
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
    );
  }
}
