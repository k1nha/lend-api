import { Router } from 'express';
import { EmployeeController } from '../../../../domain/controller';

const EmployeeRouter = Router();
const employeeController = new EmployeeController();

EmployeeRouter.get('/', employeeController.findAll);
EmployeeRouter.post('/', employeeController.create);
EmployeeRouter.patch('/:id');
EmployeeRouter.delete('/:id');

export { EmployeeRouter };
