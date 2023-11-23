const express = require("express");
const {
  listAllJobs,
  getJobDetails,
  uploadResume,
} = require("../../controllers/candidate/candidateController");
const { data } = require("../../data");

const candidateRouter = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log("BODY----------", req.body);
    console.log("FILE-----------", file);
    const userId = req.body.userId;
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = `${file.fieldname}-${uniqueSuffix}${path.extname(
      file.originalname
    )}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

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

candidateRouter.post("/upload-resume", upload.single("resume"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  console.log("REQ.BODY222222222222", req.body.userId);
  const { filename } = req.file;
  uploadResume(filename, req.body.userId);
  return res.json({ filename });
});

module.exports = candidateRouter;
