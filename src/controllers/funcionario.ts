import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class FuncionarioController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'cod_matricula',
      'nome_funcionario',
      'cargo_id_cargo',
    ];

    // for (const fields in requiredFields) {
    //   if (!httpRequest.body[fields]) {
    //   }
    // }

    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: 'no name provided',
      };
    }
  }
}
