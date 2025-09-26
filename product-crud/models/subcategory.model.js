
const { Schema, default: mongoose } = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    }
})

const SubCategory = mongoose.model('category',SubcategorySchema)

module.exports = SubCategory
