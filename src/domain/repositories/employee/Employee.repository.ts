import { EmployeeEntity } from '../../entity/';

export interface EmployeeRepository {
  create(employee: EmployeeEntity): Promise<EmployeeEntity | void>;
  findAll(): Promise<EmployeeEntity[]>;
  update(id: string, employee: EmployeeEntity): Promise<void>;
  delete(id: string): Promise<void>;
}
