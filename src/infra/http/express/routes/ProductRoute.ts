import { Router } from 'express';
import { ProductController } from '../../../../domain/controller';

const ProductRouter = Router();
const producController = new ProductController();

ProductRouter.post('/', producController.create);
ProductRouter.get('/', producController.findAll);
ProductRouter.delete('/:id', producController.delete);
ProductRouter.put('/:id', producController.update);

export { ProductRouter };
