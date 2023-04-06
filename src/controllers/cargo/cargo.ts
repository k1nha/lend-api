import { MissingParamsError } from '@/errors/missing-params-errors';
import { badRequest } from '@/helpers/http-helper';
import { HttpRequest, HttpResponse } from '@/protocols/http';

export class CargoController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.nome_cargo) {
      return badRequest(new MissingParamsError('no cargo name is provided'));
    }

    return {
      statusCode: 400,
      body: 'Missing params',
    };
  }
}
