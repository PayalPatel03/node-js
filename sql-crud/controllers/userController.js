const db = require("../config/db");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
    if (err) return res.send(err);
    res.send("User added!");
  });
};

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, req.params.id], (err) => {
    if (err) return res.send(err);
    res.send("User updated!");
  });
};

exports.deleteUser = (req, res) => {
  db.query("DELETE FROM users WHERE id=?", [req.params.id], (err) => {
    if (err) return res.send(err);
    res.send("User deleted!");
  });
};
