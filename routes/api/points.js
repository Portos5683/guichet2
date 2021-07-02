const axios = require("axios");
const express = require("express");
const router = express.Router();
const format = require('../../image')
//const print = require('../../printer')

router.get("/addpoints", async (req, res) => {
  let current = await axios.get("http://localhost:8000/curenum/1");
  let currentId = current.data.trueId + 1
  let nbre = await axios.get("http://localhost:8000/codes");
  await axios.post("http://localhost:8000/codes",{trueId: currentId}).then((response) => {
    res.send(response.data);
  });
  console.log('coucou')
  format.formatTicket(currentId,nbre.data.length)
  //print.printTicket()
  await axios
  .put("http://localhost:8000/curenum/1", { trueId: currentId })
  .then((response) => {
 // console.log(response.data);
  });
});

router.get("/getpoints", async (req, res) => {

  let {data} = await axios.get("http://localhost:8000/codes");

  res.json(data);
});
router.get("/getallguichets", async (req, res) => {

  let poule = await axios.get("http://localhost:8000/guichets");
  //console.log(poule)

  res.json(poule.data);
});


router.get("/getfirstcodetoattribute", async (req, res) => {
  let { data } = await axios.get("http://localhost:8000/codes");
  const firstElement = data[0];
  res.json(firstElement);
  console.log(firstElement);
});

router.post("/createoneguichet", async (req, res) => {
  await axios
    .post("http://localhost:8000/guichets", {
      name: req.body.name,
    })
    .then((response) => {
      res.json(response.data);
    });
});

router.get("/guichetfree/:id", async (req, res) => {
  // Get the Id of the Guichet
  console.log("BACKEND GUICHET FREE");
  let idName = req.params.id;

  // get the first element of the codes table
  let { data } = await axios.get("http://localhost:8000/codes");
  const element = data[0].id;
  const elt = data[0].trueId
  // get all guichet
  let guichets = await axios.get("http://localhost:8000/guichets");
  let currentGuichet = guichets.data
  //add the current client
  await axios
    .put("http://localhost:8000/guichets/" + idName, {
    name: currentGuichet[idName-1].name,
    idCurrent: elt

    })
    .then((response) => {
   // console.log(response.data);
    });
  // match the guichet and the code and return the element
  let matchdone = { guichet: currentGuichet[idName-1].name, id: element };
  //console.log(matchdone);
  res.json(matchdone);

  // delete the element matched from the db
  await axios
    .delete("http://localhost:8000/codes/" + element)
    .then(() => {
      console.log("done");
    })
    .catch((e) => {
      console.log(e);
    });
});

router.get("/allGuichets", async (req, res) => {
  let { data } = await axios.get("http://localhost:8000/guichets");
  res.json({ guichets: data });
});

module.exports = router;
