const express = require('express')
const router = express.Router()
const axios = require('axios')


//HTML tester
router.get('/pul', function(request, response) {
  response.sendFile( __dirname  + '/tester.html');
});
  

router.get('/courant', function (req, res) {
    axios.get('http://localhost:2323/curenum/1').then((response) => {
      console.log(response.data)
    
      res.send(response.data);
    });
   
    console.log('Un nouveau client est arriver dans la file');
  })



module.exports = router