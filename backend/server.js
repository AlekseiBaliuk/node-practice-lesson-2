const express = require("express");
const path = require("path");
const connectDb = require("../config/db");
require("colors");
require("../config/db");

const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
// console.log(require("dotenv").config({ path: configPath }));
const { PORT = 5001 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set routes

app.use("/api/v1", require("./routes/filmsRoutes"));

const errorHandler = require("./middlewares/errorHandler");
const errorRoutesHandler = require('./middlewares/errorRoutes')


app.use("*", errorRoutesHandler);
app.use(errorHandler);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green.bold.italic);
});
