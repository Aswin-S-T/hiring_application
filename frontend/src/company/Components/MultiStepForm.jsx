import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
          <div className="step-form p-4">
            <div className="container-fluid">
              {/* <h1>Step 1</h1> */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Step 2</h1>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Step 3</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Step 4</h1>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={submitForm}>Submit</button>
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
