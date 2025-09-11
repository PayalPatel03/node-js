require('dotenv').config();
const { default: mongoose } = require("mongoose");

const db=async()=>{
    try {
        
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected successfully!!!");
        
    } catch (error) {
        console.log(error.message);
    }

}
module.exports=db;