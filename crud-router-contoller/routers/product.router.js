const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.showProducts);
router.get("/add", controller.addProductPage);
router.post("/add", controller.addProduct);


module.exports = router;
