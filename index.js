const express = require("express");

const { connectToDb } = require("./connection");

const urlRoute = require("./routes/url");

const app = express();
const port = 3000;

connectToDb()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Something went wrong", err));

app.use(require("express-status-monitor")());

app.use(express.urlencoded({ extended: true })); //to read html form data
app.use(express.json()); //to read json

app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
