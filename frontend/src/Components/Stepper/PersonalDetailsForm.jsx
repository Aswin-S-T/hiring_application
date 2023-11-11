import React, { useState } from "react";

function PersonalDetailsForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [availability, setAvailability] = useState("");
  const [references, setReferences] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      fullName,
      email,
      phone,
      address,
      resume,
      education,
      workExperience,
      skills,
      coverLetter,
      availability,
      references,
      portfolio,
    });
  };
  return (
    <div className="container-fluid p-5">
      <h2 className="form-title" style={{left:"28px",position:"relative"}}>PersonalDetailsForm</h2>
      <div className="card-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label>Full Name:</label>
              <input
                type="text"
                className="form-control w-100"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Email:</label>
              <input
                type="email"
                className="form-control w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label>Phone:</label>
              <input
                type="tel"
                className="form-control w-100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Address:</label>
              <textarea
                className="form-control w-100"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label>Resume/CV:</label>
              <input
                type="file"
                className="form-control w-100"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Education:</label>
              <textarea
                className="form-control w-100"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>Work Experience:</label>
              <textarea
                className="form-control w-100"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Skills:</label>
              <input
                type="text"
                className="form-control w-100"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Cover Letter:</label>
              <textarea
                className="form-control w-100"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Availability:</label>
              <input
                type="text"
                className="form-control w-100"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>References:</label>
              <textarea
                className="form-control w-100"
                value={references}
                onChange={(e) => setReferences(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Portfolio or Work Samples:</label>
              <input
                type="text"
                className="form-control w-100"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
