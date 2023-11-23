const { successResponse, errorResponse } = require("../../constants/response");
const AppliedJobs = require("../../models/appliedJobs");
const Jobs = require("../../models/jobModal");
const User = require("../../models/userModal");
const { sendEmailNotification } = require("../../utils/utils");

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
  applyJob: (data) => {
    return new Promise((resolve, reject) => {
      AppliedJobs.create(data).then(async (result) => {
        if (result) {
          let jobData = await Jobs.findOne({ _id: data.jobId });
          const updatedUser = await User.findOneAndUpdate(
            { email: data.email },
            { $push: { appliedJobs: result?._id } },
            { new: true }
          ).then(async () => {
            await sendEmailNotification(
              data.email,
              jobData?.jobTitle,
              "Your application submitted successfullyyy..."
            );
            resolve(successResponse);
          });
        }
      });
    });
  },
};
