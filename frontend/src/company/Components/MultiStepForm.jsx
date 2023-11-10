import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  //   const [formData, setFormData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //   });

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    location: "",
    jobType: "",
    salary: "",
    applicationDeadline: "",
    jobCategory: "",
    experienceLevel: "",
    educationLevel: "",
    skills_and_requirement: "",
    contactInformation: "",
    companyDescription: "",
    companyWebsite: "",
    social_media_links: [],
    additional_features: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-form p-5">
            <div className="container-fluid">
              {/* <h1>Step 1</h1> */}
              {/* <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              /> */}
              <div className="row">
                <div className="col-md-6">
                  <p>Job Title</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Description</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Company Name</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Location</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Job Type</p>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <button
                onClick={nextStep}
                className="btn btn-success mt-2"
                style={{ float: "right", marginBottom: "20px" }}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-form p-5">
            <div className="container-fluid">
              <h1>Step 2</h1>
              {/* <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            /> */}
              <div className="row">
                <div className="col-md-6">
                  <p>Salary</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Appliction Deadline</p>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Job Category</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Experience Years</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <p>Education</p>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row" style={{ float: "right" }}>
                <button
                  onClick={prevStep}
                  className="btn btn-danger"
                  style={{ left: "-10px", position: "relative" }}
                >
                  Previous
                </button>
                <button onClick={nextStep} className="btn btn-success">
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="step-form p-5">
              <div className="container-fluid">
                {/* <h1>Step 3</h1> */}

                <div className="row">
                  <div className="col-md-6">
                    <p>Skills and Requirements</p>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <p>Contact Information (Phone Number)</p>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <p>Company Website Link</p>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <p>Additional Features</p>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                {/* <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            /> */}
                <div className="row mt-2" style={{ float: "right" }}>
                  <button
                    onClick={prevStep}
                    className="btn btn-danger"
                    style={{ left: "-10px", position: "relative" }}
                  >
                    Previous
                  </button>
                  <button onClick={nextStep} className="btn btn-success">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Step 4</h1>

            {/* <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            /> */}
            <div className="statement p-4">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
            </div>
            <div className="row mt-2" style={{ float: "right" }}>
              <button
                className="btn btn-danger"
                onClick={prevStep}
                style={{ left: "-10px", position: "relative" }}
              >
                Previous
              </button>
              <button className="btn btn-success" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const submitForm = () => {
    // Handle form submission here with formData
    console.log("Form submitted with data:", formData);
  };

  return <div>{renderStep()}</div>;
}

export default MultiStepForm;
