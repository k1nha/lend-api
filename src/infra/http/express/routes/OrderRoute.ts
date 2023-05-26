import { Router } from 'express';
import { OrderCategory } from '../../../../domain/controller/';

const OrderRouter = Router();
const orderController = new OrderCategory();

OrderRouter.get('/', orderController.findAll);
OrderRouter.post('/', orderController.create);
OrderRouter.patch('/:id', orderController.update);
OrderRouter.delete('/:id', orderController.delete);

export { OrderRouter };
