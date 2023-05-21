import { PrismaClient } from '@prisma/client';
import { RoleEntity } from '../../entity';
import { RoleRepository } from '../role/Role.repository';

export class PrismaRoleRepository implements RoleRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async create(role: RoleEntity) {
    const createRole = await this.prisma.role.create({
      data: {
        name: role.name,
      },
    });
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.prisma.role.findMany();
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(id: string, role: RoleEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
