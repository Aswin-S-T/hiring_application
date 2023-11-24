import { BASE_URL } from "./constants/url";

const urls = {
  allJobs: `api/candidate/all-jobs`,
  jobDetail: `api/candidate/job`,
  uploadResume: `api/candidate/upload-resume`,
  applyJob: `api/candidate/apply-job`,
  myJobs: `api/candidate/my-jobs`,

  // Company routes
  postJob: `api/company/add-job`,
  // end Company routes
};

const API_ENDPOINTS = {
  getAllJobs: `${BASE_URL}/${urls.allJobs}`,
  getJobDetails: `${BASE_URL}/${urls.jobDetail}`,
  uploadResume: `${BASE_URL}/${urls.uploadResume}`,
  applyJob: `${BASE_URL}/${urls.applyJob}`,
  myJobs: `${BASE_URL}/${urls.myJobs}`,

  // Company routes
  postJob: `${BASE_URL}/${urls.postJob}`,
  // End company routes
};

export default API_ENDPOINTS;
