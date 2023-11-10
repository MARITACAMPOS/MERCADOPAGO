const express = require("express");
const path = require("path");

const { reset } = require("nodemon");


const app = express();

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.listen(3000, () => {
    console.log("Server running en puerto", 3000);
});
