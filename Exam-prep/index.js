const express = require('express');
const path = require('path');
const app = express();
const port = 1503;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/login'); // redirect root to login
});

app.get('/login', (req, res) => {
  res.render('pages/login'); // render login.ejs
});
app.get("/signup", (req, res) => {
  res.render("pages/signup");
});

// Start server
app.listen(port, (err) => {
  if (!err) {
    console.log(`Server running at http://localhost:${port}`);
  } else {
    console.error(err);
  }
});
