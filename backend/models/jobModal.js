const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String },
    company: { type: String },
    location: { type: String },
    salary: { type: String },
    description: { type: String },
    requirements: [],
    skillsRequired: [],
    education: { type: String },
    experienceLevel: { type: String },
    applicationInstructions: { type: String },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("Jobs", jobSchema);
module.exports = Jobs;
