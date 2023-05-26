import express, { Application } from 'express';
import {
  EmployeeRouter,
  CategoryRouter,
  RoleRouter,
  ProductRouter,
  OrderRouter,
} from './routes';
import morgan from 'morgan';

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
    this.server.use('/employee', EmployeeRouter);
    this.server.use('/role', RoleRouter);
    this.server.use('/category', CategoryRouter);
    this.server.use('/product', ProductRouter);
    this.server.use('/order', OrderRouter);
  }
}
