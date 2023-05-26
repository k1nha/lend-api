import { OrderEntity } from '../../entity';

export interface OrderRepository {
  create(order: OrderEntity): Promise<OrderEntity | void>;
  findAll(): Promise<OrderEntity[]>;
  update(id: string, order: OrderEntity): Promise<OrderEntity | void>;
  delete(id: string): Promise<void>;
}
