import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import StepperForm from "../Components/Stepper/StepperForm";

function JobApply() {
  return (
    <div style={{ backgroundColor: "whitesmoke",height:"100vh" }}>
      <Navbar />
      <div>
        <StepperForm />
      </div>
    </div>
  );
}

export default JobApply;
