var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index");
});

app.get("/quiz", function(req, res){
  res.render("quiz");

});
app.listen(3000, function(){
    console.log("Server has started!");
});