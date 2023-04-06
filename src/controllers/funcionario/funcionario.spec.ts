import { FuncionarioController } from './funcionario';

const makeSut = () => {
  return new FuncionarioController();
};

describe('Funcionario Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        cod_matricula: 'any_cod_matricula',
        cargo_id_cargo: 1,
      },
    };

    const httpReponse = sut.handle(httpRequest);

    expect(httpReponse.statusCode).toEqual(400);
    expect(httpReponse.body).toEqual('no name provided');
  });

  test('Should return 400 if no codigo matricula is provided', () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        nome_funcionario: 'any_nome_funcionario',
        cargo_id_cargo: 1,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual('no matricula provided');
  });

  test('Should return 400 if no cargo is provided', () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        cod_matricula: 'any_cod_matricula',
        nome_funcionario: 'any_nome_funcionario',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual('no cargo provided');
  });
});
