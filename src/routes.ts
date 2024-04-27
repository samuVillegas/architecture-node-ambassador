import {Router} from "express";

import {
    CreateProduct,
    DeleteProduct,
    GetProduct,
    Products, ProductsBackend,
    ProductsFrontend,
    UpdateProduct
} from "./controller/product.controller";
import {CreateLink, GetLink, Links, Stats} from "./controller/link.controller";
import {ConfirmOrder, CreateOrder, Orders} from "./controller/order.controller";
import { Rankings } from "./controller/ranking.controller";


export const routes = (router: Router) => {
    // Admin
    router.get('/api/admin/products', Products);
    router.post('/api/admin/products', CreateProduct);
    router.get('/api/admin/products/:id', GetProduct);
    router.put('/api/admin/products/:id', UpdateProduct);
    router.delete('/api/admin/products/:id', DeleteProduct);
    router.get('/api/admin/users/:id/links', Links);
    router.get('/api/admin/orders', Orders);

    router.get('/api/ambassador/products/frontend', ProductsFrontend);
    router.get('/api/ambassador/products/backend', ProductsBackend);
    router.post('/api/ambassador/links', CreateLink);
    router.get('/api/ambassador/stats', Stats);
    router.get('/api/ambassador/rankings', Rankings);

    // Checkout
    router.get('/api/checkout/links/:code', GetLink);
    router.post('/api/checkout/orders', CreateOrder);
    router.post('/api/checkout/orders/confirm', ConfirmOrder);
}
