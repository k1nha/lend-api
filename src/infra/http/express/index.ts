import express, { Application } from 'express';

export default class Server {
  public server: Application;

  constructor() {
    this.server = express();
    this.useMiddlewares();
  }

  private useMiddlewares() {
    this.server.use(express.json());
  }
}
