export class InvalidParamsError extends Error {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'InvalidParamsError';
  }
}
