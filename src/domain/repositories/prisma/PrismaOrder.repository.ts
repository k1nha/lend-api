import { PrismaClient } from '@prisma/client';
import { OrderRepository } from '../order/Order.repository';
import { OrderEntity } from '../../entity';

export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(order: OrderEntity): Promise<void | OrderEntity> {}

  async findAll(): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany({});
  }

  async update(id: string, order: OrderEntity): Promise<void | OrderEntity> {}

  async delete(id: string): Promise<void> {}
}
