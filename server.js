const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const axios = require("axios");

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



const points = require("./routes/api/points");
app.use("/api/points", points);


const port = process.env.PORT || 5001;


const server = http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});