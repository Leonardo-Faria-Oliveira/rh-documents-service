import { DocumentTypes } from '@app/entities/documentTypes';
import { DocumentTypes as rawDocumentTypes } from '@prisma/client';

export class PrismaDocumentTypesMapper {
  //Here we take data from persistence layer ans mask to domain layer
  static toDomain(raw: rawDocumentTypes): DocumentTypes {
    // const companyRaw =
    return new DocumentTypes(
      {
        content: raw.content,
        name: raw.name,
        createdAt: raw.createdAt,
        active: raw.active,
      },
      raw.id,
    );

    // console.log(c);
    // return c;
  }
}
