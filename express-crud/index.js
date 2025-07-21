const express = require('express');

const PORT=1503;
const app=express();

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({ extended: true })); 

const users=[];

app.get('/',(req,res)=>{
    console.log(users);
    
    return res.render('index');
})
app.post('/signup',(req,res)=>{
    let obj={
        email:req.body.email,
        password:req.body.password,
    }
    users.push(obj);
    console.log("Data addedd..");
    
    return res.redirect('/');
})

app.listen(PORT,function(err){
    if(err){
        console.log(err.message);  
    }
    else{
        console.log("Server started..")
        console.log("http://localhost:"+PORT)
    }
})