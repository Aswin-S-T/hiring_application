import React from "react";
import Navbar from "../Components/Navbar/Navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid landing-page-container">
        <div className="row">
          <div className="col-md-6">
            <div className="container-fluid">
              <div className="title">
                <h2>Its Easy to find <br /> your <span>Dream Job</span></h2>
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
            style={{top:'-80px',position:"relative"}}
              src="https://www.iihglobal.com/wp-content/uploads/2021/09/android-app.png"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
