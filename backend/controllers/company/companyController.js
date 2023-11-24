const Jobs = require("../../models/jobModal");
const { successResponse, errorResponse } = require("../../constants/response");
module.exports = {
  addJob: (data) => {
    return new Promise((resolve, reject) => {
      Jobs.create(data).then(() => {
        resolve(successResponse);
      });
    });
  },
};
