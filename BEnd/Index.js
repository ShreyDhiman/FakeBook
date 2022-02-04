const express = require("express");
const mongoose = require("mongoose");
const User = require("./routers/user");

mongoose.connect("mongodb://127.0.0.1:27017/fakebook");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(User);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
