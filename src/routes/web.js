const express = require('express');
const app = express.Router();
const path = require('path')


// Website Routes

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "index.html")));
app.get("/portfolio", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "portfolio.html")));
app.get("/contact", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "contact.html")));
app.get("/aboutMe", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "aboutMe.html")));


module.exports = app
