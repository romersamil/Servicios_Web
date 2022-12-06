const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/add.js", (req, res) => {
res.sendFile(path.join(__dirname + "/add.js"));
});

app.get("/addcontact.html", (req, res) => {
res.sendFile(path.join(__dirname + "/addcontact.html"));
});


app.listen(3000, () => {
    console.log("SERVER ONLINE", 3000)
});

