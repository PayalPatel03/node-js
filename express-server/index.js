const express=require("express");
const PORT=8081;
const app=express();

// app.get('/',(req,res)=>{
//     res.send("Welcome in my world");
// })

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    return res.render('index');
})
app.get('/about',(req,res)=>{
    return res.render('about');
})
app.get('/contact',(req,res)=>{
    return res.render('contact');
})
app.get('/blog',(req,res)=>{
    return res.render('blog');
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Server started at port:",PORT); 
    }
})
