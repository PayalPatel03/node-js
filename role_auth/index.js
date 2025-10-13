const bodyParser = require('body-parser');
const express= require('express');
const db = require('./config/database');
const morgan = require('morgan');
const dotenv = require('./config/config.env');
const userRouter = require('./routes/user.route');

const port=dotenv.PORT;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use('/api/user',userRouter);
app.listen(port,(err)=>{
    if(!err){
        db();
        console.log("Server started");
        console.log("http://localhost:"+port);
    }
})