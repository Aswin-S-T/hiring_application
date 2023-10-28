import React from "react";

function LoginScreen() {
  return (
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
            <h2>Hello,
                <br />
                Welcome Back.
            </h2>
            <form className="mt-4">
              <p>Email Address</p>
              <input type="email" />
              <br />
              <br />
              <p>Password</p>
              <input type="password"  />
              <br />
              <button>Login</button>
            </form>
            <br />
            <a href="/company/register">Create new Account ?</a>
            <br />
            <a>Foreget password ?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
