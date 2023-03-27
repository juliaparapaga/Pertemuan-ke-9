import express from 'express'
import{
    getProducts,
    getProductByid,
    createProduct,
    deleteProduct,
    updateProduct,
}from '../controlier/Product.js';
const router = express.router();

router.get("/products",getProducts);
router.get("/p\roduct/:id", getProductByid);
router.get("/product",createProduct);
router.get("/product/:id", updateProduct);
router.get("/product/:id", deleteProduct);

export default router;