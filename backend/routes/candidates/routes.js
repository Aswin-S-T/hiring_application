const express = require("express");

const candidateRouter = express.Router();

candidateRouter.get("/", (req, res) => {
  res.send("Candidate router called");
});

module.exports = candidateRouter;
