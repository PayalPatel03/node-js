
const { default: mongoose } = require("mongoose");

const db = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://p6579113:12345@cluster0.zlavh0m.mongodb.net/product')
        console.log("Database connected..")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db;
