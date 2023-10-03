import { IsEmail, Length } from 'class-validator';

//This class validate the body as a middleware
export class CreateDocumentTypeBody {
  @Length(5, 40, {
    message: 'Nome deve ser maior que 5 digitos e menor que 40',
  })
  name: string;

  contentArray: string[];
}
