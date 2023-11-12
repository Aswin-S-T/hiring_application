import React, { useState } from "react";

function RegisterScreen() {
  const [role, setRole] = useState("candidate");
  return (
    <div>
      <div className="login-screen">
        <div className="row">
          <div className="col-md-6 leftSide">
            <h4>
              Welcome to <span> JobWave</span>
            </h4>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/graphic-designer-6311240-5211312.png"
              className="w-100"
            />
          </div>
          <div className="col-md-6 mt-5">
            <div className="container p-4 mt-5">
              <h2>Create new Account</h2>
              {role == "company" ? (
                <>
                  <form className="mt-4">
                    <p>Company Name</p>
                    <input type="text" />
                    <br />
                    <br />
                    <p>Company Email Address</p>
                    <input type="email" />
                    <br />
                    <br />
                    <p>Contact Number</p>
                    <input type="text" />
                    <br />
                    <br />
                    <p>Type of Company</p>
                    <select style={{ width: "50%" }}>
                      <option>Software</option>
                      <option>Government</option>
                    </select>
                    <br />
                    <br />

                    <p>Company Email Address</p>
                    <input type="email" />
                    <br />
                    <br />
                    <p>Password</p>
                    <input type="password" />
                    <br />
                    <button>Register</button>
                  </form>
                </>
              ) : (
                <>
                  <form className="mt-4">
                    <p>First Name</p>
                    <input type="text" />
                    <br />
                    <br />
                    <p>Last Name</p>
                    <input type="text" />
                    <br />
                    <br />
                    <p>Email Address</p>
                    <input type="email" />
                    <br />
                    <br />
                    <p>Contact Number</p>
                    <input type="text" />
                    <br />
                    <br />

                    <p>Password</p>
                    <input type="password" />
                    <br />
                    <button>Register</button>
                  </form>
                </>
              )}
              <br />
              <a href="/company/login">Already have an account ?</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
