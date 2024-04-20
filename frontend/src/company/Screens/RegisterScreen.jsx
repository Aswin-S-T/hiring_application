import React, { useState } from "react";

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-screen">
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 className="register-screen-text">
                Find your Dream Jobs from Top Companies
              </h3>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/searching-for-job-online-4487043-3738450.png"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="space-around">
              <h4>JOB PORTAL</h4>
              <a href="/login" style={{textDecoration:"none",color:'#444'}}>
                Already have an account ? <span style={{color:'darkcyan',fontWeight:'bold'}}>LOGIN</span>{" "}
              </a>
            </div>
            <div className="form-container">
              <h5>Join to Career Linker</h5>
              <form>
                <p>Company Name</p>
                <input type="text" placeholder="Your company Name" />
                <p>Email Address</p>
                <input type="email" placeholder="Your email ID" />
                <p>Company Size</p>
                <select>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                </select>
                <p>Type of Company</p>
                <select>
                  <option>Software Indutry</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                  <option>1 - 10</option>
                </select>
                <p>Contact Number</p>
                <input type="phone" placeholder="Your mobile number" />
                <p>Password</p>
                <input type={showPassword ? "text" : "password"} />
                <i
                  // style={{
                  //   position: "absolute",
                  //   right: "10px",
                  //   top: "50%",
                  //   transform: "translateY(-50%)",
                  //   cursor: "pointer",
                  // }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </i>

                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
