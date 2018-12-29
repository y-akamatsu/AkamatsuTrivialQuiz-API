const express = require("express");
const app = express();
const route = require('./routes/route');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", route);
app.use("/quiz", route);
app.use("/api/quiz", route);

app.listen(3000, function () {
  console.log("Server has started!");
});
