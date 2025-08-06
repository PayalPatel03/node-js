const Product = require("../modules/productSchema");

exports.showProducts = async (req, res) => {
      console.log("Request Body:", req.body); 
    const products = await Product.find();
    res.render("index", { products });
};

exports.addProductPage = (req, res) => {
    res.render("addProduct");
};

exports.addProduct = async (req, res) => {    
    console.log(req.body);
    
    const { name, price, description, category } = req.body;
    await Product.create({ name, price, description, category });
    res.redirect("/");
};
