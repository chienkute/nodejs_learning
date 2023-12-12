const express = require("express");
const morgan = require("morgan");
//Tạo đối tượng đại diện cho nodejs
const app = express();
const port = 3000;
app.use(morgan("combined"));
// route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
