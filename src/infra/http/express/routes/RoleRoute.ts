import { Router } from 'express';
import { RoleController } from '../../../../domain/controller/';

const RoleRouter = Router();
const roleController = new RoleController();

RoleRouter.get('/', roleController.findAll);
RoleRouter.post('/', roleController.create);
RoleRouter.delete('/:id', roleController.delete);
RoleRouter.patch('/:id', roleController.update)

export { RoleRouter };
