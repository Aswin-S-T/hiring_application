const Jobs = require("../../models/jobModal");
const { successResponse, errorResponse } = require("../../constants/response");
const User = require("../../models/userModal");
const bcrypt = require("bcrypt");
let { objectId } = require("mongoose");
const jwt = require("jsonwebtoken");
const Company = require("../../models/companyModel");
const JWT_SECRET = process.env.JWT_SECRET || "something secret";

module.exports = {
  addJob: (data) => {
    return new Promise((resolve, reject) => {
      Jobs.create(data).then(() => {
        resolve(successResponse);
      });
    });
  },
  getMyJobs: () => {
    return new Promise((resolve, reject) => {
      Jobs.find().then(async (result) => {
        let ids = [];
        let jobArr = [];
        if (result.length > 0) {
          let jobObj = {};
          for (let i = 0; i < result.length; i++) {
            const e = result[i];
            jobObj.job = e;
            const jobids = e?._id;
            ids.push(jobids);
          }
          if (ids.length > 0) {
            let appliedUser = await User.find({ appliedJobs: { $in: ids } });
            jobObj.applied_users = appliedUser;
          }
          jobArr.push(jobObj);
        }

        successResponse.data = jobArr;

        resolve(successResponse);
      });
    });
  },
  registerCompany: (data) => {
    return new Promise(async (resolve, reject) => {
      let { contact, email } = data;
      contact = await Company.findOne({ contact });
      email = await Company.findOne({ email });
      if (email) {
        errorResponse.message =
          "User already exists with this usename or email";
        resolve(errorResponse);
      } else {
        let bcryptedPassword = await bcrypt.hash(data.password, 10);

        data.password = bcryptedPassword;
        const token = jwt.sign({ email }, JWT_SECRET, {
          expiresIn: "2h",
        });
        data.token = token;

        await Company.create(data).then((result) => {
          if (result) {
            successResponse.data = result;
            resolve(successResponse);
          } else {
            resolve(errorResponse);
          }
        });
      }
    });
  },
};
