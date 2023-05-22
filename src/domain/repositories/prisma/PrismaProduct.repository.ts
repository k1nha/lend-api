import { PrismaClient } from '@prisma/client';
import { ProductRepository } from '../product/Product.repository';
import { ProductEntity } from '../../entity/Product.entity';

export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany({});
  }

  async create(product: ProductEntity): Promise<void | ProductEntity> {
    const createProduct = await this.prisma.product.create({
      data: product,
    });
  }

  async update(id: string, product: ProductEntity): Promise<void> {
    await this.prisma.product.update({
      where: { patrimony_key: id },
      data: product,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { patrimony_key: id },
    });
  }
}
