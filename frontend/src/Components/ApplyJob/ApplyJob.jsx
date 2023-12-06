import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Paper,
} from "@mui/material";

const steps = ["Step 1", "Step 2", "Verification"];

const ApplyJob = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Access all entered values in formData object
    console.log("Form Data:", formData);
    // Add your logic to submit the form data
  };

  return (
    <div className="mt-5" style={{ top: "50px", position: "relative" }}>
      <div className="container card ">
        <Stepper activeStep={activeStep} className="mt-4">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>Verification</Typography>
              <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
                <Typography variant="h6">Verification Details:</Typography>
                <Typography>Name: {formData.name}</Typography>
                <Typography>Email: {formData.email}</Typography>
                <Typography>Phone: {formData.phone}</Typography>
                <Typography>Age: {formData.age}</Typography>
                <Typography>Education: {formData.education}</Typography>
              </Paper>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          ) : (
            <div>
              <Typography>{steps[activeStep]}</Typography>
              {activeStep === 0 && (
                <>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <TextField
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                  />
                </>
              )}
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
              {activeStep !== 0 && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
