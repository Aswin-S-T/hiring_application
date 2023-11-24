const express = require("express");
const { addJob } = require("../../controllers/company/companyController");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router called");
});

companyRouter.post("/add-job", (req, res) => {
  addJob(req.body).then((result) => {
    res.send(result);
  });
});

module.exports = companyRouter;
