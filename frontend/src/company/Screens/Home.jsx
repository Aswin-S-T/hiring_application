import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
function Home() {
  return (
    <div className="container-fluid">
      <h4 className="dash-title">Dashboard</h4>
      <div className="dashboard-home">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <h4>Total Jobs</h4>
              <div className="row p-4">
                <WorkHistoryIcon className="dash-icons" />
                <h3>55</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4>Unapproved Jobs</h4>
              <div className="row p-4">
                <PendingActionsIcon className="dash-icons" />
                <h3>55</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4>Active Jobs</h4>
              <div className="row p-4">
                <WorkHistoryIcon className="dash-icons" />
                <h3>55</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <h4>Closed Jobs</h4>
              <div className="row p-4">
                <WorkHistoryIcon className="dash-icons" />
                <h3>55</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
