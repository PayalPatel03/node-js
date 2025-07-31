const express = require("express");
const bodyParser = require("body-parser");
const Books = require("./models/bookSchema");
const db = require("./configs/database");
const app = express();
const port = 1000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  Books.find({})
    .then((books) => {
      return res.render("addBook", { books });
    })
    .catch((err) => {
      console.log(err.message);
      return res.render("addBook", { books: [] });
    });
});

//delete
app.get("/book/delete/:id", (req, res) => {
  let { id } = req.params;
  Books.findByIdAndDelete(id)
    .then((book) => {
      return res.redirect(req.get("Referrer") || "/");
    })
    .catch((err) => {
      console.log(err.message);
      return res.redirect(req.get("Referrer") || "/");
    });
});
//edit
app.get("/book/edit/:id", (req, res) => {
  const { id } = req.params;
  Books.findById(id)
    .then((book) => {
      return res.render("edit", { book });
    })
    .catch((err) => {
      console.log(err.message);
      return res.render("edit", { book: {} }); 
    });
});

app.post('/book/edit/:id',(req,res)=>{
  const {id} = req.params;
  Books.findByIdAndUpdate(id,req.body).then((book)=>{
    console.log("Books updated..");
    return res.redirect("/");
  }).catch((err)=>{
    console.log(err.message);
    return res.redirect("/");
  })
})
//
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
