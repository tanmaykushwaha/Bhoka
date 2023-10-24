require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config");

const {
  server: { PORT, environment },
  BASE_PATH,
} = config;

const router = require("./routes");
//database
const Database = require("./utils/database");
Database.connectMongo();
//Database

app.get("/", (req , res) =>
  res.send(
    `Welcome to BHOKA  ${environment} server on PORT : ${PORT} ...... Base path - ${BASE_PATH}`
  )
);
//app.use("/", router);

app.listen(5000, console.log(`${environment} server started on port ${PORT}`));
