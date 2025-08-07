const { Router } = require("express");
const { home, addProduct, deleteProduct } = require("../controllers/product.controller");

const productRoute = Router();

productRoute.get('/', home); 
productRoute.post('/add-product', addProduct); 
productRoute.get('/delete/:id', deleteProduct);

module.exports = productRoute;
