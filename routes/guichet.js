const express = require('express')
const guichet = express.Router()
const axios = require('axios')
const file = require('../fil.json')
const fonction = require('../functions/functions')

//Create new clerks
guichet.get('/newclercks', function (req, res) {
    axios.post('http://localhost:2323/clerks', req.data);  
    console.log('le guichetier est enregistrer avec succes'+req.data)
})



//Clercks actions

guichet.get('/guichetier/:id', function(request, response) {

    let id = request.params.id;  
    let firstElt = file.clients[0]
    let clerkId 
  
    for(var i=0;i<file.clerks.length;i++)
    {
        if(file.clerks[i].id==id)
        {
            clerkId=id
        }
    }
    console.log('le guichetier qui demande cette requette est '+file.clerks[clerkId-1].nameClerk+' et occupe le guichet numero '+clerkId)
    if(firstElt!= null && file.clients.length>1)
    {
        var currentId = firstElt.id
        console.log(currentId)
        async function fait() {
            try {
                //const resp = await axios.put(`http://localhost:2424/clerks/${request.params.id}`,{"nameClerk":file.clerks[clerkId-1].nameClerk,"idCurrent":currentId});;
                //console.log(resp.data);
                const resp = await fonction.addInClerks(request,file,currentId,clerkId)
                const resp1 = await fonction.addCurrentId(currentId)
                const resp2 = await fonction.deleteCurrentId(currentId)
                
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        fait()
        
        console.log(currentId)
        response.send('rstjsjzj ')
    }
  
  })

  module.exports = guichet