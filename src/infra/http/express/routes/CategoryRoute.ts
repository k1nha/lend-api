import { Router } from 'express';
import { CategoryController } from '../../../../domain/controller/Category.Controller';

const CategoryRouter = Router();
const categoryController = new CategoryController();

CategoryRouter.get('/', categoryController.findAll);
CategoryRouter.post('/', categoryController.create);
CategoryRouter.patch('/:id', categoryController.update);
CategoryRouter.delete('/:id', categoryController.delete);

export { CategoryRouter };
