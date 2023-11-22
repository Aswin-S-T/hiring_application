import { BASE_URL } from "./constants/url";

const urls = {
  allJobs: `api/candidate/all-jobs`,
  jobDetail: `api/candidate/job`,
};

const API_ENDPOINTS = {
  getAllJobs: `${BASE_URL}/${urls.allJobs}`,
  getJobDetails: `${BASE_URL}/${urls.jobDetail}`,
};

export default API_ENDPOINTS;
