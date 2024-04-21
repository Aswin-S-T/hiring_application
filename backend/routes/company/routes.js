const express = require("express");
const {
  addJob,
  getMyJobs,
  registerCompany,
} = require("../../controllers/company/companyController");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router called");
});

companyRouter.post("/add-job", (req, res) => {
  addJob(req.body).then((result) => {
    res.send(result);
  });
});

companyRouter.get("/my-jobs", (req, res) => {
  getMyJobs().then((result) => {
    res.send(result);
  });
});

companyRouter.post("/create-account", (req, res) => {
  registerCompany(req.body).then((result) => {
    res.send(result);
  });
});

module.exports = companyRouter;
