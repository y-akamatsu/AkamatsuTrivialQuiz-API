const express = require("express");
const app = express();
const renderRouter = require('./routes/render');
const apiRouter = require('./routes/api');


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", renderRouter);
app.use("/api", apiRouter);

app.listen(3000, function () {
  console.log("Server has started!");
});

module.exports = app;