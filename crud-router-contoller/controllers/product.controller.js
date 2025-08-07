
const Product = require("../models/productSchema")

module.exports.home = async(req,res)=>{
    let Products=await Product.find({});
    res.render('index',{
        data:Products,
    })
}

module.exports.addProduct = async (req,res)=>{
    try{
        console.log(req.body)
        await Product.create(req.body)
        res.redirect(req.get('Referrer') || '/')
    }
    catch(err){
        console.log(err)
        res.redirect(req.get('Referrer') || '/')
    }
}
