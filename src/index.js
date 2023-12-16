const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
//Tạo đối tượng đại diện cho nodejs
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));
//Template engine
//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
