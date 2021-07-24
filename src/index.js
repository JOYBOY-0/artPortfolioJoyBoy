const express = require('express');
const path = require('path');
const app = express();

let port = (process.env.PORT || 3000);

// public access

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require('./routes/web'));

app.listen(port, ()=> console.log('Server up on http://localhost/:' + port));

