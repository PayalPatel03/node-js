const { default: mongoose } = require("mongoose");

const bookSchema=mongoose.Schema({
    book_name:{
        type:String,
        required:true,
    },
      book_price:{
        type:Number,
        required:true,
    }
})

//creating instance
const Books=mongoose.model('BookTbl',bookSchema);
module.exports=Books;