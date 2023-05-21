import { PrismaClient } from '@prisma/client';
import { RoleEntity } from '../../entity';
import { RoleRepository } from '../role/Role.repository';

export class PrismaRoleRepository implements RoleRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async create(role: RoleEntity): Promise<RoleEntity | void> {
    const createRole = await this.prisma.role.create({
      data: {
        name: role.name,
      },
    });
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.prisma.role.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.prisma.role.delete({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, role: RoleEntity): Promise<void> {
    await this.prisma.role.update({
      where: {
        id,
      },
      data: {
        name: role.name,
      },
    });
  }
}
