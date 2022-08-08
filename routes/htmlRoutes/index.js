
const path = require("path");
const router = require("express").Router();


 // GET route for index.html homepage
 router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  // GET route for animals.html page
  router.get("/animals", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/animals.html"));
  });

  // GET route for zookeepers.html page
  router.get("/zookeepers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
  });

  // wildcard route for invalid endpoint
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  module.exports = router