import EmployeeEntity from '../../entity/Employee.entity';
import { EmployeeRepository } from '../employee/Employee.repository';
import prisma from '../../../infra/db/prisma';

class PrismaEmployeeRepository implements EmployeeRepository {
  async create(employee: EmployeeEntity): Promise<EmployeeEntity | void> {
    const createdEmployee = await prisma.employee.create({
      data: {
        name: employee.props.name,
        register_key: employee.props.register_key,
        role_id: employee.props.role_id,
      },
    });
  }

  async getAll(): Promise<EmployeeEntity[]> { }

  async delete(): Promise<void> { }

  async update(id: string, employee: EmployeeEntity): Promise<void> { }
}

export default PrismaEmployeeRepository;
