import { LoginController } from './../controller/LoginController';
import { ProductController } from './../controller/ProductController';
import { Router } from 'express';

// Definicion de rutas (Endpoints a consumir)
const  ROUTE = Router();

ROUTE.post('/new_product', ProductController.createProduct);
ROUTE.delete('/delete_product/:id', ProductController.deleteProduct);
ROUTE.put('/update_product/:id', ProductController.updateProduct);
ROUTE.get('/find_product', ProductController.getAllProduct);
ROUTE.get('/find_product/:text', ProductController.getOneProduct);
ROUTE.post('/login', LoginController.login);

export default ROUTE;