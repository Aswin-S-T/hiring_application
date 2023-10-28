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

const VerticalTabs = () => {
  return (
    <>
      <div>
        <Tabs className="vertical-tabs">
          <TabList className="vertical-tab-list">
            <Tab className="vertical-tab">
              <GridViewIcon /> Dashboard
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
          </TabList>
          <TabPanel>
            <Home />
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
        </Tabs>
      </div>
    </>
  );
};

export default VerticalTabs;
