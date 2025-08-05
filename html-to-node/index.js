// const express=require('express');
// const app=express();
// const port=1503;
// app.set('view engine',"ejs");
// app.use(express.static('assets'));

// app.get('/',(req,res)=>{
//     return res.render('index');

// })
// app.get('/tables',(req,res)=>{
//     return res.render('./pages/tables')
// })
// app.get('/forms',(req,res)=>{
//     return res.render('./pages/form-basic')
// })
// app.get('/formw',(req,res)=>{
//     return res.render('./pages/form-wizard')
// })
// app.listen(port,(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("Server statred");
//         console.log("http://localhost:"+port);
        
//     }
// })


const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./configs/database");
const User = require("./models/userModel");

const app = express();
const port = 1503;

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

// Show form
app.get("/forms", (req, res) => {
  res.render("./pages/form-basic", { user: null }); 
});


// Submit form (Create)
app.post("/submit-form", async (req, res) => {
  try {
    const { fname, lname, password, company, contact, message } = req.body;

    console.log("Form Data:", req.body); // <-- TEMP LOG

    await User.create({ fname, lname, password, company, contact, message });

    res.redirect("/tables");
  } catch (err) {
    console.error("Error in submitting form:", err.message);
    res.status(500).send("Server Error");
  }
});


// Read all records (Table)
app.get("/tables", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Fetched Users:", users); // <-- TEMP LOG
    res.render("./pages/tables", { users });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).send("Server Error");
  }
});


// Delete
app.get("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/tables");
});

// Edit form
app.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("./pages/form-basic", { user });
});

// Update
app.post("/update/:id", async (req, res) => {
  const { fname, lname, password, company, contact, message } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    fname,
    lname,
    password,
    company,
    contact,
    message,
  });
  res.redirect("/tables");
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
