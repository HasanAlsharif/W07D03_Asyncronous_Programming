const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

//*** http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200);
  res.json('result');
});












app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });