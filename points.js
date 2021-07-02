const axios = require("axios");
const express = require("express");
const router = express.Router();

router.post("/addpoints", async (req, res) => {
  axios.post("http://localhost:8000/codes").then((response) => {
    res.send(response.data);
  });
});

router.get("/getpoints", async (req, res) => {
  let data = await axios.get("http://localhost:8000/codes");
  res.json(data);
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

router.post("/guichetfree", async (req, res) => {
  // Get the Id of the Guichet
  console.log("BACKEND GUICHET FREE");
  let name = req.body.name;

  // get the first element of the codes table
  let { data } = await axios.get("http://localhost:8000/codes");
  const element = data[0].id;

  // match the guichet and the code and return the element
  let matchdone = { guichet: name, id: element };
  console.log(matchdone);
  res.json(matchdone);

  // delete the element matched from the db
  axios
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
