import React from "react";
import PrimarySearchAppBar from "./Components/Header/Header";
import OutlinedCard from "./Components/Card/Card";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import JobDetailsPage from "./Screens/JobDetailsPage";
import LoginScreen from "./company/Screens/LoginScreen";
import RegisterScreen from "./company/Screens/RegisterScreen";
import Dashboard from "./company/Screens/Dashboard";
import LandingPage from "./Screens/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header style={{ backgroundColor: "yellow" }}>
          {/* <PrimarySearchAppBar style={{ backgroundColor: "yellow" }} /> */}
        </header>
        <main className="">
          <Routes>
            <Route path="/listjob" element={<HomeScreen />} />
            <Route path="/job" element={<JobDetailsPage />} />
            <Route path="/" element={<LandingPage />} />
            {/* Company Routes */}
            <Route path="/company/login" element={<LoginScreen />} />
            <Route path="/company/register" element={<RegisterScreen />} />
            <Route path="/company/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
