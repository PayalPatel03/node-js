const { default: mongoose } = require("mongoose");

const db=mongoose.connection;
mongoose.connect('mongodb://localhost:27017/data');
db.on('connected',(err)=>{
    if(!err){
        console.log('connected db successfully');
    }
})
module.exports=db;