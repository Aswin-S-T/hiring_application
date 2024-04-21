const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    company_name: { type: String, required: true },
    email: { type: String, required: true },
    company_size: { type: String, required: true },
    company_type: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    credit: { type: Number, default: 100 },
    is_blocked: { type: Boolean, default: false },
    subscribed: { type: Boolean, default: false },
    totalJobs: { type: Number, default: 0 },
    activeJobs: { type: Number, default: 0 },
    expired_jobs: { type: Number, default: 0 },
    terms_and_conditions_agreed: { type: Boolean, default: false },
    website_link: { type: String },
    logo: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
