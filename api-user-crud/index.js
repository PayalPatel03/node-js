const express = require("express");
const db = require("./configs/database");
const bodyParser = require("body-parser");
const port = 8081;
const app = express();

require('dotenv').config(); 
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use('/api',require('./routes'))

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Server Started");
    console.log("http://localhost:" + port);
  }
});
