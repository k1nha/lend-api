import { PrismaClient } from '@prisma/client';
import { CategoryRespository } from '../category/Category.repository';
import { CategoryEntity } from '../../entity';

export class PrismaCategoryRepository implements CategoryRespository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<CategoryEntity[]> {
    return this.prisma.category.findMany({});
  }

  async create(category: CategoryEntity): Promise<CategoryEntity | void> {
    const createCategory = await this.prisma.category.create({
      data: {
        name: category.name,
      },
    });
  }

  async update(id: string, category: CategoryEntity): Promise<void> {
    await this.prisma.category.update({
      where: { id },
      data: {
        name: category.name,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: { id },
    });
  }
}
