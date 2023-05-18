import { CreateDocumentType } from '@app/use-cases/documentTypes/create-document-type';
import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateDocumentTypeBody } from '../dtos/create-document-type-body';
import { AuthGuard } from '../utils/auth-guard';
import { FindDocumentTypes } from '@app/use-cases/documentTypes/find-many';
import { DocumentTypesViewModule } from '../views/document-types-view-module';

@Controller('v1')
export class DocumentTypesController {
  constructor(
    private createDocumentType: CreateDocumentType, // private accessCryptography: AccessCryptography, // private adminLocalStrategy: AdminLocalStrategy,
    private findManyDocumentTypes: FindDocumentTypes,
  ) {}

  //Path to create a document type
  @UseGuards(AuthGuard)
  @Post('document/types')
  async create(@Body() body: CreateDocumentTypeBody, @Res() res: Response) {
    const { name, contentArray } = body;
    const content = JSON.stringify(contentArray);
    try {
      await this.createDocumentType.execute({
        name,
        content,
      });
      //Created, status 200
      return res.status(200).json({
        message: 'Ok',
      });
    } catch (e) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Houve um erro, tente novamente',
      });
    }
  }

  //Path to get the document types
  @UseGuards(AuthGuard)
  async findMany(@Res() res: Response) {
    try {
      const { documenTypes } = await this.findManyDocumentTypes.execute();
      return res.status(200).json({
        count: documenTypes.length,
        documentTypes: documenTypes.map((documentType) =>
          DocumentTypesViewModule.manyDocumentTypesToHTTP(documentType),
        ),
      });
    } catch (e: any) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Houve um erro, tente novamente',
      });
    }
  }
}
