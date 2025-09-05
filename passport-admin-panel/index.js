const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const passport = require("./middlewares/passport");
const db = require("./configs/database");
const routes = require("./routes/index");

const port = 8081;
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie:{maxAge:1000*60*60}
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", routes);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Server started at http://localhost:" + port);
  }
});
