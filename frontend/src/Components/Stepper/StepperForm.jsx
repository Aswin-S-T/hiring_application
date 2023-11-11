import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./StepperForm.css";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AdditionalInformationForm from "./AdditionalInformationForm";
import JobAppliedMessage from "../MessageBox/JobAppliedMessage";

function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Personal Information" },
    { title: "AdditionalInformations" },
    { title: "Details confirmation" },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <PersonalDetailsForm />
          </div>
        );
      case 1:
        return <AdditionalInformationForm />;
      case 2:
        return (
          <div className="card-lg">
            <JobAppliedMessage />
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div className="container">
      <div className="card-lg mt-5">
        <Stepper steps={steps} activeStep={activeStep} />
        <div style={{ padding: "20px" }}>
          {getSectionComponent()}
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <button
              onClick={() => setActiveStep(activeStep - 1)}
              className="btn btn-danger"
            >
              Previous
            </button>
          )}
          {activeStep !== steps.length - 1 && (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepperForm;
