var express = require("express");
var app = express();

/*
app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>");
});

app.get("/name/:name", function (req, res) {
    var name = req.params.name;
    //res.send("<h1>Hello " + name + "</h1>");
    res.redirect('http://google.com/search?q=' + name);
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
*/

app.use(express.static("Spiel"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});