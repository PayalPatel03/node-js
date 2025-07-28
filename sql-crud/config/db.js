// config/db.js
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // ✅ update this if needed
  password: "",          // ✅ update this if you have password
  database: "testdb"     // ✅ ensure testdb exists
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected");
});

module.exports = db;
