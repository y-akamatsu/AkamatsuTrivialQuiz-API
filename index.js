const express = require("express");
const app = express();
const renderRoute = require('./routes/render');
const apiRoute = require('./routes/api');


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", renderRoute);
app.get("/api/", apiRoute);

app.listen(3000, function () {
  console.log("Server has started!");
});
