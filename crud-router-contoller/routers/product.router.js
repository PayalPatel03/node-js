const { Router } = require("express");
const { home, addProduct, deleteProduct, editProductForm, updateProduct } = require("../controllers/product.controller");

const productRoute = Router();

productRoute.get('/', home); 
productRoute.post('/add-product', addProduct); 
productRoute.get('/delete/:id', deleteProduct);
productRoute.get('/edit/:id', editProductForm);      
productRoute.post('/edit/:id', updateProduct);  


module.exports = productRoute;
