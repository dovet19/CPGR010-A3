const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html", "html"],
  })
);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
