const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("SQL CRUD app running at http://localhost:3000");
});
