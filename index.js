const express = require("express");
const app = express();
const routeRender = require('./routes/render');
const routerApi = require('./routes/Api');


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", routeRender);
app.use("/quiz", routeRender);

app.get("/api/quiz", routerApi);

app.listen(3000, function () {
  console.log("Server has started!");
});
