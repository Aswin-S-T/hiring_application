import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Navbar from "../../Components/Navbar/Navbar";

const steps = ["Basic Information", "Experience", "Step 3"];

const EditProfile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    about: "",
    currentRole: "",
    age: "",
    yearsOfExp: "",
    phone: "",
    cctc: "",
    location: "",
    email: "",
    experience: [], // Array to store experience data
    step3: "",
  });

  const [forms, setForms] = useState([]);

  const handleAddButtonClick = () => {
    setForms([
      ...forms,
      { jobTitle: "", role: "", startDate: "", endDate: "" },
    ]);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (step, value, index) => {
    if (step === "experience") {
      setForms((prevForms) =>
        prevForms.map((form, i) =>
          i === index ? { ...form, [value.name]: value.value } : form
        )
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        experience: forms,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [step]: value,
      }));
    }
  };

  const isStepCompleted = (step) => {
    return Object.keys(formData).indexOf(step) < activeStep;
  };

  const handleSubmit = () => {
    // Store the current forms in the experience array in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: forms,
    }));

    // Handle form submission with formData
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card" style={{ height: "auto" }}>
          <div className="container">
            <div className="row p-4">
              <div className="col-md-5">
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  className="mt-4"
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        error={!isStepCompleted(label)}
                        completed={isStepCompleted(label)}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="col-md-7">
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <p>All steps completed</p>
                      <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                      >
                        Submit
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        {activeStep === 0 && (
                          <div className="stepss">
                            <div className="stepss">
                              <div className="stepss">
                                {/* <label>Step 1:</label> */}
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  current Role
                                </p>

                                <br />
                                <textarea
                                  type="text"
                                  value={formData.currentRole}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("currentRole", e.target.value)
                                  }
                                />

                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  About
                                </p>

                                <br />
                                <textarea
                                  type="text"
                                  value={formData.about}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("about", e.target.value)
                                  }
                                />

                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Age
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.age}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("age", e.target.value)
                                  }
                                />

                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Totl years of Experience
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.yearsOfExp}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("yearsOfExp", e.target.value)
                                  }
                                />

                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Connected Contact Number
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.phone}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("phone", e.target.value)
                                  }
                                />
                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Email
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.email}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("email", e.target.value)
                                  }
                                />
                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Current CTC
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.cctc}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("cctc", e.target.value)
                                  }
                                />
                                <br />
                                <p
                                  className="information-text"
                                  style={{ left: "16px", position: "absolute" }}
                                >
                                  Current Location
                                </p>

                                <br />
                                <input
                                  type="text"
                                  value={formData.location}
                                  className="form-control w-100"
                                  onChange={(e) =>
                                    handleChange("location", e.target.value)
                                  }
                                />
                                <br />
                                <br />
                              </div>
                            </div>
                          </div>
                        )}
                        {activeStep === 1 && (
                          <div>
                            <button
                              onClick={handleAddButtonClick}
                              className="btn btn-primary"
                            >
                              Add
                            </button>
                            {forms.map((form, index) => (
                              <div key={index} className="mt-2 row">
                                <label>
                                  Company Name:
                                  <input
                                    type="text"
                                    className="form-control w-100"
                                    placeholder="Enter compny name"
                                    name="jobTitle"
                                    value={form.jobTitle}
                                    onChange={(e) =>
                                      handleChange(
                                        "experience",
                                        e.target,
                                        index
                                      )
                                    }
                                  />
                                </label>
                                <br />
                                <label>
                                  Role:
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter role"
                                    name="role"
                                    value={form.role}
                                    onChange={(e) =>
                                      handleChange(
                                        "experience",
                                        e.target,
                                        index
                                      )
                                    }
                                  />
                                </label>
                                <br />
                                <div>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <label>
                                        Start Date:
                                        <input
                                          className="form-control"
                                          type="date"
                                          name="startDate"
                                          value={form.startDate}
                                          onChange={(e) =>
                                            handleChange(
                                              "experience",
                                              e.target,
                                              index
                                            )
                                          }
                                        />
                                      </label>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        left: "10px",
                                        position: "relative",
                                      }}
                                    >
                                      <label>
                                        End Date:
                                        <input
                                          className="form-control"
                                          type="date"
                                          name="endDate"
                                          value={form.endDate}
                                          onChange={(e) =>
                                            handleChange(
                                              "experience",
                                              e.target,
                                              index
                                            )
                                          }
                                        />
                                      </label>
                                    </div>
                                  </div>

                                  <br />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {activeStep === 2 && (
                          <div>
                            <label>Step 3:</label>
                            <br />
                            <input
                              type="text"
                              value={formData.step3}
                              onChange={(e) =>
                                handleChange("step3", e.target.value)
                              }
                            />
                          </div>
                        )}
                      </div>

                      <div className="mt-2">
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          variant="contained"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleNext}
                          variant="contained"
                          color="primary"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
