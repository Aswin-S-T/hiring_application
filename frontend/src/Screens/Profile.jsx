import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ClickableLinkChips from "../Components/Chips/ClickableLinkChips";
import BasicAccordion from "../Components/BasicAccordion/BasicAccordion";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card mt-4">
              <div className="container-fluid">
                <div className="profile-image">
                  <img
                    src="https://www.marcorossini.altervista.org/images/heading-profile.jpg"
                    className="mt-4"
                  />
                </div>
                <h5 className="text-center mt-2">Ashish George Aby</h5>
                <p className="text-center">Python Developer</p>
                <div className="content">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </div>
                <div className="mt-3">
                  <h5>Skills</h5>
                  <div>
                    <ClickableLinkChips />
                  </div>
                </div>
                <div className="mt-3">
                  <h5>About</h5>
                  <div className="content">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-card mt-4 p-4">
              <div className="container-fluid">
                <div className="mt-3">
                  <h5>Basic Information</h5>
                  <div className="basic-information mt-4">
                    <div className="row">
                      <div className="col-md-4 mt-2">
                        <h5>AGE</h5>
                        <h6>23 Years</h6>
                      </div>
                      <div className="col-md-4 mt-2">
                        <h5>YEARS OF EXPERIENCE</h5>
                        <h6>5 Years</h6>
                      </div>
                      <div className="col-md-4 mt-2">
                        <h5>PHONE</h5>
                        <h6>+91-8938383838</h6>
                      </div>
                      <div className="col-md-4 mt-2">
                        <h5>CTC</h5>
                        <h6>8 Lpa</h6>
                      </div>
                      <div className="col-md-4 mt-2">
                        <h5>LOCATION</h5>
                        <h6>Inforpark, Kakkanad , Kochi Kerala</h6>
                      </div>
                      <div className="col-md-4 mt-2">
                        <h5>EMAIL</h5>
                        <h6>ashishg@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="dwnd-btn">Download Resume</button>
              </div>
            </div>
            <div className="profile-card mt-4 p-4">
              <div className="container-fluid">
                <div className="mt-3">
                  <h5>Experiences</h5>
                  <div className=" mt-4">
                    <div className="row p-3">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="data:image/png;base64,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"
                            className="w-75 com-logo"
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <h5 style={{ marginLeft: "20px" }}>Infosys</h5>
                            <div
                              className="basic-information mt-4"
                              style={{ marginLeft: "20px" }}
                            >
                              <h6>Python Developer</h6>
                              <h5>23 August 2021 - 10 March 2022</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row p-3">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="data:image/png;base64,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"
                            className="w-75 com-logo"
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <h5 style={{ marginLeft: "20px" }}>Qburst</h5>
                            <div
                              className="basic-information mt-4"
                              style={{ marginLeft: "20px" }}
                            >
                              <h6>Python Developer</h6>
                              <h5>23 August 2021 - 10 March 2022</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <BasicAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
