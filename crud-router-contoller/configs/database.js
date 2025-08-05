const { default: mongoose } = require("mongoose");

const db=mongoose.connection;
mongoose.connect('mongodb+srv://p6579113:12345@cluster0.zlavh0m.mongodb.net/product');
db.on('connected',(err)=>{
    if(!err){
        console.log('connected db successfully');
    }
})
module.exports=db;