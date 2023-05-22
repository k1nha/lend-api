import { PrismaClient } from '@prisma/client';
import { EmployeeEntity } from '../../entity/';
import { EmployeeRepository } from '../employee/Employee.repository';

class PrismaEmployeeRepository implements EmployeeRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async create(employee: EmployeeEntity): Promise<EmployeeEntity | void> {
    const createdEmployee = await this.prisma.employee.create({
      data: {
        name: employee.name,
        register_key: employee.register_key,
        role_id: employee.role_id,
      },
    });
  }

  async findAll(): Promise<EmployeeEntity[]> {
    return await this.prisma.employee.findMany({});
  }

  async delete(id: string): Promise<void> {
    await this.prisma.employee.delete({
      where: {
        register_key: id,
      },
    });
  }

  async update(id: string, employee: EmployeeEntity): Promise<void> {
    await this.prisma.employee.update({
      where: {
        register_key: id,
      },
      data: {
        name: employee.name,
        role_id: employee.role_id,
      },
    });
  }
}

export default PrismaEmployeeRepository;
