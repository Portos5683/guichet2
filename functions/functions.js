const axios = require('axios')

async function addInClerks(request,file,currentId,clerkId) 
{
        try 
        {
            const resp = await axios.put(`http://localhost:2424/clerks/${request.params.id}`,{"nameClerk":file.clerks[clerkId-1].nameClerk,"idCurrent": parseInt(axios.get(`http://localhost:2424/curenum/1`).idCurrent)+1});;
            //console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
};




async function addCurrentId(currentId) {
    try {
        const resp = await axios.put(`http://localhost:2424/curenum/1`,{"idCurrent":currentId});
        //console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};




async function deleteCurrentId(currentId) {
    try {
        const resp = await axios.delete(`http://localhost:2424/clients/${currentId}`);
        //console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};




async function newclient() {
    try {
        const resp = await axios.post(`http://localhost:2424/clients`,{ nextPerso: "Helo"});
        //console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


async function getAllclients() {
    try {
        const resp = await  axios.get('http://localhost:2323/clients');      
        console.log(resp.data);
     return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


module.exports.addCurrentId = addCurrentId
module.exports.addInClerks = addInClerks
module.exports.deleteCurrentId = deleteCurrentId
module.exports.newclient = newclient
module.exports.getAllclients = getAllclients