const express = require('express');
const app = express();
const port = 1503;

require('./configs/database');

app.listen(port, (err) => {
    if (!err) {
        console.log("Server started on port", port);
        console.log("http://localhost:" + port);
    }
});
