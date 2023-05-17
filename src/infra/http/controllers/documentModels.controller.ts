import { CreateDocumentModel } from '@app/use-cases/documentModels/create-document-model';
import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '../utils/auth-guard';
import { CreateDocumentModelBody } from '../dtos/create-document-model-body';

@Controller('v1')
export class DocumentModelsController {
  constructor(
    private createDocumentModel: CreateDocumentModel, // private accessCryptography: AccessCryptography, // private adminLocalStrategy: AdminLocalStrategy,
  ) {}

  //Path to create a document type
  @UseGuards(AuthGuard)
  @Post('document/models')
  async create(@Body() body: CreateDocumentModelBody, @Res() res: Response) {
    const { name, contentObject } = body;
    const content = JSON.stringify(contentObject);
    try {
      await this.createDocumentModel.execute({
        title: 'string',
        text: 'string',
        fields: 'string',
        digitalSignature: false,
        typeId: 'strin',
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
