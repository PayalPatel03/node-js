const { Router } = require("express");
const { home, addProduct } = require("../controllers/product.controller");

const productRoute = Router();

productRoute.get('/', home); // renders the page
productRoute.post('/add-product', addProduct); // handles form POST submission

module.exports = productRoute;
