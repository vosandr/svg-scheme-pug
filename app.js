const express = require("express");
const app = express();
const path = require("path")

const port = 8080

app.set("view engine", "pug");
app.set("views");

app.use("/", function(req, res){
    res.render("index");
    res.setHeader('content-type', 'text/plain');
}); 
app.use("/static", express.static(path.join(__dirname, 'static')));

app.listen(port, () => console.log(`http://localhost:${8080}`));
