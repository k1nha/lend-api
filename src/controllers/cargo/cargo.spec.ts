import { CargoController } from './cargo';

const makeSut = () => {
  return new CargoController();
};

describe('Cargo Controller', () => {
  test('if no cargo name is provided return 400 error', () => {
    const sut = makeSut();

    const httpRequest = {
      body: {},
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual('no cargo name is provided');
  });
});
