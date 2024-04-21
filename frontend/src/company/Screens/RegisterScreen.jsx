import React, { useState } from "react";
import Swal from "sweetalert2";
import API_ENDPOINTS from "../../Api";
import axios from "axios";

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterCompany = async (e) => {
    e.preventDefault();
    let register_data = {
      company_name: companyName,
      email: email,
      company_size: companySize,
      company_type: companyType,
      phone,
      password,
    };
    await axios
      .post(API_ENDPOINTS.registerCompany, register_data)
      .then((resp) => {
        if (resp && resp.data && resp.data.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Registered successfully.",
          }).then((result) => {
            localStorage.setItem(
              "personal-details",
              JSON.stringify(resp?.data?.data)
            );
            window.location.href = "/login";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Something went wrong.",
          });
        }
      });
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
              <a
                href="/login"
                style={{ textDecoration: "none", color: "#444" }}
              >
                Already have an account ?{" "}
                <span style={{ color: "darkcyan", fontWeight: "bold" }}>
                  LOGIN
                </span>{" "}
              </a>
            </div>
            <div className="form-container">
              <h5
                className="text-center"
                style={{
                  color: "darkcyan",
                  fontWeight: "bold",
                  left: "-50px",
                  position: "relative",
                }}
              >
                Join to Career Linker
              </h5>
              <form className="mt-5" onSubmit={handleRegisterCompany}>
                <p>Company Name</p>
                <input
                  type="text"
                  placeholder="Your company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <p>Email Address</p>
                <input
                  type="email"
                  placeholder="Your email ID"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Company Size</p>
                <select
                  className="w-50"
                  onChange={(e) => setCompanySize(e.target.value)}
                >
                  <option value="1-10">1 - 10</option>
                  <option value="11-20">11 - 20</option>
                  <option value="21-30">21 - 30</option>
                  <option value="31-40">31 - 40</option>
                  <option value="41-50">41 - 50</option>
                </select>
                <p>Type of Company</p>
                <select
                  className="w-50"
                  onChange={(e) => setCompanyType(e.target.value)}
                >
                  <option value="Software Indutry">Software Indutry</option>
                  <option value="Textiles">Textiles</option>
                </select>
                <p>Contact Number</p>
                <input
                  type="phone"
                  placeholder="Your mobile number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p>Password</p>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
