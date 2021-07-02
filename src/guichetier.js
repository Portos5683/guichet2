const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const axios = require("axios");

// MiddleWares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



const points = require("../routes/api/points");
app.use("/api", points);


const port = process.env.PORT || 5000;


const server = http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});