const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: true },
    role: { type: String, default: "Candidate" },
    linkedinUrl: { type: String },
    skills: [],
    experience: [],
    about: { type: String },
    subscribed: { Boolean, default: false },
    profileImage: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU",
    },
    appliedJobs: [],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
