type Employee = {
  register_key: string;
  name: string;
  role_id: string;
};

class EmployeeEntity {
  public props: Employee;
  constructor(props: Employee) {
    this.props = props;
  }
}

export default EmployeeEntity;
