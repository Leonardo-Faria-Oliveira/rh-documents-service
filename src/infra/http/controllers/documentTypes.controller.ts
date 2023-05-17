import { CreateDocumentType } from '@app/use-cases/documentTypes/create-document-type';
import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateDocumentTypeBody } from '../dtos/create-document-type-body';
import { AuthGuard } from '../utils/auth-guard';

@Controller('v1')
export class DocumentTypesController {
  constructor(
    private createDocumentType: CreateDocumentType, // private accessCryptography: AccessCryptography, // private adminLocalStrategy: AdminLocalStrategy,
  ) {}

  //Path to create a document type
  @UseGuards(AuthGuard)
  @Post('document/types')
  async create(@Body() body: CreateDocumentTypeBody, @Res() res: Response) {
    const { name, contentArray } = body;
    const content = JSON.stringify(contentArray);
    console.log(content);
    console.log(JSON.parse(content));
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
}
