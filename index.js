const express = require("express");
const app = express();
const route = require('./routes/controller');
const api = require('./routes/api');


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", route);
app.use("/quiz", route);
app.use("/api/quiz", api);

app.listen(3000, function () {
  console.log("Server has started!");
});
