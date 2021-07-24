const express = require('express');
const app = express.Router();
const path = require('path')


// Website Routes

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "index.html")));
app.get("/character", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "character.html")));
app.get("/contact", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "contact.html")));

module.exports = app
