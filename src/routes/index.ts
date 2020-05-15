import { Router } from 'express';
import productRouter from './product.routes';
import ticketRouter from './ticket.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/tickets', ticketRouter);

export default routes;
