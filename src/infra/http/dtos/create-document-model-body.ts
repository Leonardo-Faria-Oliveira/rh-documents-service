import { Length } from 'class-validator';

//This class validate the body as a middleware
export class CreateDocumentModelBody {
  @Length(5, 150, {
    message: 'Título deve ser maior que 5 digitos e menor que 150',
  })
  title: string;

  text: string[];

  fields: string[];

  digitalSignature: boolean;

  typeId: string;
}
