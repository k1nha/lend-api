import { Router } from 'express';
import { RoleController } from '../../../../domain/controller/';

const RoleRouter = Router();
const prismaRole = new RoleController()

RoleRouter.get('/', prismaRole.findAll);
RoleRouter.post('/', prismaRole.create);

export { RoleRouter };

