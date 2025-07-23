
const express=require('express');
const app=express();
const port=1503;
let employees=[];
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    console.log(employees);
    return res.render("index",{
        employees
    })
});
app.get("/employee/delete/:id", (req, res) => {
    const {id}=req.params;
    employees = employees.filter((employee) => employee.id != id);
    return res.redirect("/");
});

app.post("/login", (req, res) => {
  const uniqueId = Date.now(); 

  let obj = {
    id: uniqueId,                 
    employee_id: uniqueId,        
    employee_name: req.body.employee_name,
    dep: req.body.dep,
    emp_salary: req.body.emp_salary
  };

  employees.push(obj);
  console.log("Data added:", obj);
  return res.redirect("/");
});


app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Server started.");
       console.log("http://localhost:" + port);
    }
})
