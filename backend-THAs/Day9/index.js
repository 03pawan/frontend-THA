const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", (req, res) => {
    res.render("index", { title: "Express" });
});

app.get("/image", (req, res) => {
    res.sendFile(path.join(__dirname, "public/dog.jpeg"));
});

app.get("/text", (req,res) => {
    res.sendFile(path.join(__dirname, "public/hello.txt"));
});

app.listen(port);