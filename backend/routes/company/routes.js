const express = require("express");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router called");
});

module.exports = companyRouter;
