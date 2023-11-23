const { successResponse, errorResponse } = require("../../constants/response");
const Jobs = require("../../models/jobModal");
const User = require("../../models/userModal");

module.exports = {
  listAllJobs: () => {
    return new Promise((resolve, reject) => {
      Jobs.find().then((result) => {
        if (result) {
          successResponse.data = result;
          resolve(successResponse);
        } else {
          resolve(errorResponse);
        }
      });
    });
  },
  getJobDetails: (jobId) => {
    return new Promise((resolve, reject) => {
      Jobs.findOne({ _id: jobId }).then((result) => {
        if (result) {
          successResponse.data = result;
          resolve(successResponse);
        } else {
          resolve(errorResponse);
        }
      });
    });
  },
  uploadResume: (filename, userId) => {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: userId }).then((user) => {
        if (user) {
          if (user.resume) {
            User.updateOne({ _id: userId }, { $set: { resume: filename } })
              .then(() => resolve())
              .catch((error) => reject(error));
          } else {
            User.updateOne({ _id: userId }, { $set: { resume: filename } })
              .then(() => resolve())
              .catch((error) => reject(error));
          }
        }
      });
    });
  },
};
