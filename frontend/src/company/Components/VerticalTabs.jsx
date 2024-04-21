import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GridViewIcon from "@mui/icons-material/GridView";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ChatIcon from "@mui/icons-material/Chat";
import Home from "../Screens/Home";
import AllJobs from "../Screens/AllJobs";
import UnapprovedJobs from "../Screens/UnapprovedJobs";
import ChatScreen from "../Screens/ChatScreen";
import MultiStepForm from "./MultiStepForm";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Profile from "../Screens/Profile";

const VerticalTabs = () => {
  return (
    <>
      <div>
        <Tabs className="vertical-tabs">
          <TabList className="vertical-tab-list mt-5">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "/brand1.png"}
                alt="Example"
                className=" w-50"
                style={{ left: "35px", position: "relative" }}
              />
            </div>
            <Tab className="vertical-tab mt-4">
              <GridViewIcon /> Dashboard
            </Tab>
            <Tab className="vertical-tab">
              <WorkHistoryIcon /> Post Job
            </Tab>
            <Tab className="vertical-tab">
              <WorkHistoryIcon /> My Jobs
            </Tab>
            <Tab className="vertical-tab">
              <PendingActionsIcon /> Unapproved Jobs
            </Tab>
            <Tab className="vertical-tab">
              <ChatIcon /> Messages
            </Tab>
            <Tab className="vertical-tab">
              <PersonRoundedIcon /> Profile
            </Tab>
          </TabList>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <MultiStepForm />
          </TabPanel>
          <TabPanel>
            <AllJobs />
          </TabPanel>
          <TabPanel>
            <UnapprovedJobs />
          </TabPanel>
          <TabPanel>
            <ChatScreen />
          </TabPanel>
          <TabPanel>
            <Profile />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default VerticalTabs;
