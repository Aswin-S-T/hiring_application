import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./StepperForm.css";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AdditionalInformationForm from "./AdditionalInformationForm";
import JobAppliedMessage from "../MessageBox/JobAppliedMessage";

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {},
    additionalInformation: {},
  });

  const steps = [
    { title: "Personal Information" },
    { title: "Additional Information" },
    { title: "Details confirmation" },
  ];

  const handleNext = (data) => {
    setFormData({ ...formData, [getStepName(activeStep)]: data });
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFinalSubmit = () => {
    // Combine all form data and send it to the server
    const allFormData = {
      ...formData.personalDetails,
      ...formData.additionalInformation,
    };

    // Call your API to save the data on the server
    // Example: axios.post('/api/submitFormData', allFormData)
    console.log("Form submitted:", allFormData);
  };

  const getStepName = (step) => {
    switch (step) {
      case 0:
        return "personalDetails";
      case 1:
        return "additionalInformation";
      default:
        return null;
    }
  };

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <PersonalDetailsForm onNext={handleNext} />;
      case 1:
        return (
          <AdditionalInformationForm
            personalDetails={formData.personalDetails}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 2:
        return (
          <div className="card-lg">
            <JobAppliedMessage />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="card-lg mt-5">
        <Stepper steps={steps} activeStep={activeStep} />
        <div style={{ padding: "20px" }}>
          {getSectionComponent()}
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <button onClick={handlePrevious} className="btn btn-danger">
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
          {activeStep === steps.length - 1 && (
            <button
              onClick={handleFinalSubmit}
              className="btn btn-primary"
              style={{ float: "right" }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepperForm;
