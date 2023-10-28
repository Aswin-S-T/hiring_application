import React from "react";
import JobDetail from "../Components/Card/JobDetail";
import OutlinedCard from "../Components/Card/Card";

function JobDetailsPage() {
  return (
    <div className="container-fluid mt-5">
        <div className="row mt-5">
            <div className="col-md-8">
                <JobDetail />
            </div>
            <div className="col-md-4">
                <div className="mt-5">
                    <h2>Similar Jobs for you</h2>
                    <OutlinedCard />
                </div>
            </div>
        </div>
    </div>
  );
}

export default JobDetailsPage;
