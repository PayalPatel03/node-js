const express = require("express");
const bodyParser = require("body-parser");
const Books = require("./models/bookSchema");
const db = require("./configs/database");
const app = express();
const port = 1000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  Books.find({})
    .then((book) => {
      return res.render("addBook", {
        book,
      });
    })
    .catch((err) => {
      console.log(err.message);
      return res.render("addBook", {
        book: [],
      });
    });
});
//delete
app.get('/book/delete/:id',(req,res)=>{
    let {id}=req.params;
    Books.
    findByIdAndDelete(id)
    .then((book)=>{
     return res.redirect(req.get("Referrer") || "/");
    })
    .catch((err)=>{
        console.log(err.message);
        return res.redirect(req.get("Referrer") || "/");
    })
})
app.post("/add", (req, res) => {
  console.log(req.body);
  let obj = {
    book_name: req.body.book_name,
    book_price: req.body.book_price,
  };
  Books.create(obj)
    .then(() => {
      return res.redirect(req.get("Referrer") || "/");
    })
    .catch((err) => {
      console.log(err);
      return res.redirect(req.get("Referrer") || "/");
    });
});

app.listen(port, (err) => {
  if (err) {
    db;
    console.log(err.message);
  } else {
    console.log("server started");
    console.log("http://localhost:" + port);
  }
});
