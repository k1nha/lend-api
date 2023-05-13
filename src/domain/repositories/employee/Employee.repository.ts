import EmployeeEntity from '../../entity/Employee.entity';

export interface EmployeeRepository {
  create(employee: EmployeeEntity): Promise<EmployeeEntity | void>;
  getAll(): Promise<EmployeeEntity[]>;
  update(id: string, employee: EmployeeEntity): Promise<void>;
  delete(): Promise<void>;
}
