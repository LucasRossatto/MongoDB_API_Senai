const express = require("express");
const connectDB = require("./src/config/database");
const router = require("./src/router/router");

const app = express();

connectDB();

app.use("/api", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log("server online");
});