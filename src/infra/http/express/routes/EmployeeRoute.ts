import { Router } from 'express';
import { EmployeeController } from '../../../../domain/controller';

const EmployeeRouter = Router();
const employeeController = new EmployeeController();

EmployeeRouter.get('/', employeeController.findAll);
EmployeeRouter.post('/', employeeController.create);
EmployeeRouter.patch('/:id', employeeController.update);
EmployeeRouter.delete('/:id', employeeController.delete);

export { EmployeeRouter };
