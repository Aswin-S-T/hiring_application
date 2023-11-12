import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OutlinedCard from "../Components/Card/Card";

function MyJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  return (
    <div className="myjobs">
      <Navbar />
      <div className="container">
        <div className="card-lg p-3 mt-5">
          <h4>My Jobs</h4>
          <div className="mt-4">
            <Tabs>
              <TabList>
                <Tab>Applied (10)</Tab>
                <Tab>Saved (2)</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <OutlinedCard />
                </div>
              </TabPanel>
              <TabPanel>
                {savedJobs.length > 0 ? (
                  <>Saved jobs</>
                ) : (
                  <div className="text-center">
                    <h4>No Saved Jobs</h4>
                    <img
                      className="w-25"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-9561127-7706458.png"
                    />
                  </div>
                )}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
