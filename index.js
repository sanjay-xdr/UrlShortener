const express = require("express");

const { connectToDb } = require("./connection");

const path=require("path")

const urlRoute = require("./routes/url");
const staticRouter=require("./routes/staticRouter")

const app = express();
const port = 3000;

connectToDb()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Something went wrong", err));

app.use(require("express-status-monitor")());

app.use(express.urlencoded({ extended: true })); //to read html form data
app.use(express.json()); //to read json
app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"))




app.use("/",staticRouter);
app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
