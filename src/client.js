const express = require('express')
const app = express()
const client = require('../routes/clients.js')
const routeur =  require('../traite')
app.use(routeur)
app.use('/',client)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.listen(3635)
  