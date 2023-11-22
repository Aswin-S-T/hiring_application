const express = require("express");
const {
  listAllJobs,
  getJobDetails,
} = require("../../controllers/candidate/candidateController");
const { data } = require("../../data");

const candidateRouter = express.Router();

candidateRouter.get("/", (req, res) => {
  res.send("Candidate router called");
});

candidateRouter.get("/all-jobs", (req, res) => {
  listAllJobs().then((result) => {
    res.send(result);
  });
});

candidateRouter.get("/job/:jobId", (req, res) => {
  getJobDetails(req.params.jobId).then((result) => {
    res.send(result);
  });
});

module.exports = candidateRouter;
