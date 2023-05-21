import express, { Application } from 'express';
import { EmploeyeRouter } from './routes';
import morgan from 'morgan';
import { RoleRouter } from './routes/RoleRoute';

export default class Server {
  public server: Application;

  constructor() {
    this.server = express();
    this.useMiddlewares();
    this.useRoutes();
  }

  private useMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan('dev'));
  }

  private useRoutes() {
    this.server.use('/employee', EmploeyeRouter);
    this.server.use('/role', RoleRouter);
  }
}
