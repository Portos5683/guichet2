const express = require('express')
const clients = express.Router()
const fonction = require('../functions/functions')


//new client
clients.get('/newclient', function (req, res) {
    fonction.newclient()
    console.log('Un nouveau client est arriver dans la file');
    res.send('Un nouveau client est arriver dans la file')
  })
//Get all client in the server

clients.get('/allclient', function (req, res) {
    fonction.getAllclients()
    console.log('Un nouveau client est arriver dans la file');
    res.send('Un nouveau client est arriver dans la file')
  })

module.exports = clients