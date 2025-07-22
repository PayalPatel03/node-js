const express = require("express");

const PORT = 1503;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
let users = [];

app.get("/", (req, res) => {
  console.log(users);
  return res.render("index",{
    users
  });
});
app.get("/user/delete/:id", (req, res) => {
const {id}=req.params;
  users = users.filter((user) => user.id != id);
  return res.redirect("/");
});

app.post("/signup", (req, res) => {
  let obj = {
    id: Date.now(), 
    email: req.body.email,
    password: req.body.password,
  };
  users.push(obj);
  console.log("Data added..");
  return res.redirect("/");
});


app.listen(PORT, function (err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server started..");
    console.log("http://localhost:" + PORT);
  }
});
