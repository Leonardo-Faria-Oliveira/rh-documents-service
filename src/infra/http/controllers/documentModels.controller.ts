import { CreateDocumentModel } from '@app/use-cases/documentModels/create-document-model';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '../utils/auth-guard';
import { CreateDocumentModelBody } from '../dtos/create-document-model-body';
import { FindManyByTypeId } from '@app/use-cases/documentModels/find-many-by-type-id';
import { DocumentModelsViewModule } from '../views/document-models-view-module';

@Controller('v1')
export class DocumentModelsController {
  constructor(
    private createDocumentModel: CreateDocumentModel, // private accessCryptography: AccessCryptography, // private adminLocalStrategy: AdminLocalStrategy,
    private findManyByTypeId: FindManyByTypeId,
  ) {}

  //Path to create a document type
  @UseGuards(AuthGuard)
  @Post('document/models')
  async create(@Body() body: CreateDocumentModelBody, @Res() res: Response) {
    const { title, text, digitalSignature, fields, typeId } = body;
    try {
      await this.createDocumentModel.execute({
        title: title,
        text: JSON.stringify(text),
        fields: JSON.stringify(fields),
        digitalSignature: digitalSignature,
        typeId: typeId,
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

  //Path to get the document models
  @UseGuards(AuthGuard)
  @Get('document/types/:id/models')
  async findManyDocumentsByTypeId(
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    try {
      const { documentModels } = await this.findManyByTypeId.execute(id);
      const typeData = documentModels[0];
      console.log(typeData.type);
      return res.status(200).json({
        count: documentModels.length,
        type: {
          name: typeData.type.name,
          content: JSON.parse(typeData.type.content),
        },
        documentModels: documentModels.map((documenModel) =>
          DocumentModelsViewModule.manyDocumentModelsToHTTP(documenModel),
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
