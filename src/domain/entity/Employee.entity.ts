type Employee = {
  register_key: string;
  name: string;
  role_id: string;
};

export class EmployeeEntity {
  public name: string;
  public register_key: string;
  public role_id: string;

  constructor({ name, register_key, role_id }: Employee) {
    this.name = name;
    this.register_key = register_key;
    this.role_id = role_id;
  }
}
