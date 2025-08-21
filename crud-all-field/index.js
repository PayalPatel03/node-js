const express = require("express");
const db = require("./configs/database");
const useRoutes = require("./routers");  // this points to routers/index.js

const app = express();
const port = 1503;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

useRoutes(app);   // load all routes

app.listen(port, async () => {
  await db();
  console.log("Server running at http://localhost:" + port);
});
