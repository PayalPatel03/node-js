
const Product = require("../models/productSchema")

module.exports.home = async(req,res)=>{
    let Products=await Product.find({});
    res.render('index',{
        data:Products,
        editData: null,
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

//delete
module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
};

//edit


// ... home, addProduct, deleteProduct already defined

// GET edit form with existing data
module.exports.editProductForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const allProducts = await Product.find();

    res.render('index', {
      data: allProducts,
      editData: product, 
    });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
};

// POST updated data
module.exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
};



