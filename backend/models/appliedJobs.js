const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    address: { type: String },
    cctc: { type: String },
    coverLetter: { type: String },
    dates: { type: String },
    ectc: { type: String },
    education: { type: String },
    email: { type: String },
    fullName: { type: String },
    jobId: { type: String },
    noticePeriod: { type: String },
    phone: { type: String },
    portfolio: { type: String },
    references: { type: String },
    report: { type: String },
    resume: { type: String },
    skills: { type: String },
    workExperience: { type: String },
    yearsofExp: { type: String },
  },
  {
    timestamps: true,
  }
);

const AppliedJobs = mongoose.model("AppliedJobs", jobSchema);
module.exports = AppliedJobs;
