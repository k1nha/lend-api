import { Router } from 'express';
import { EmployeeController } from '../../../../domain/controller';

const EmploeyeRouter = Router();
const prismaEmployee = new EmployeeController();

EmploeyeRouter.get('/', prismaEmployee.findAll);
EmploeyeRouter.post('/', prismaEmployee.create);
EmploeyeRouter.patch('/:id');
EmploeyeRouter.delete('/:id');

export { EmploeyeRouter };
