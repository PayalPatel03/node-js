const express=require('express');
const app=express();
const port=1503;
app.set('view engine',"ejs");
app.use(express.static('assets'));

app.get('/',(req,res)=>{
    return res.render('index');

})
app.get('/tables',(req,res)=>{
    return res.render('./pages/tables')
})
app.get('/forms',(req,res)=>{
    return res.render('./pages/form-basic')
})
app.get('/formw',(req,res)=>{
    return res.render('./pages/form-wizard')
})
app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Server statred");
        console.log("http://localhost:"+port);
        
    }
})