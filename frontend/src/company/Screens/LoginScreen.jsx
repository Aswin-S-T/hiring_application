import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // const validatePassword = () => {
  //   const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  //   if (!passwordRegex.test(password)) {
  //     setPasswordError(
  //       "Password should have at least 8 characters, one digit, and one uppercase letter"
  //     );
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    validateEmail();
    let loginData = {
      email,
      password,
    };
    await axios
      .post(`http://localhost:5000/api/auth/login`, loginData)
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Operation completed successfully.",
          }).then(() => {
            window.location.href = "/alljobs";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Something went wrong.",
          });
        }
      });
    console.log("LOGIN DATA-------------", loginData);
    // validatePassword();
  };

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
            <h2>
              Hello,
              <br />
              Welcome Back.
            </h2>
            <form className="mt-4" onSubmit={handleLogin}>
              <p>Email Address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {emailError && (
                <p className="error" style={{ color: "red" }}>
                  {emailError}
                </p>
              )}
              <br />
              <br />
              <p>Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onBlur={validatePassword}
              />
              {passwordError && (
                <p className="error" style={{ color: "red" }}>
                  {passwordError}
                </p>
              )}
              <br />
              <button type="submit">Login</button>
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
};

export default LoginForm;

// import React from "react";
// import { useState } from "react";

// function LoginScreen() {
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   return (
//     <div className="login-screen">
//       <div className="row">
//         <div className="col-md-6 leftSide">
//           <h4>
//             Welcome to <span> JobWave</span>
//           </h4>
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/graphic-designer-6311240-5211312.png"
//             className="w-100"
//           />
//         </div>
//         <div className="col-md-6 mt-5">
//           <div className="container p-4 mt-5">
//             <h2>Hello,
//                 <br />
//                 Welcome Back.
//             </h2>
//             <form className="mt-4">
//               <p>Email Address</p>
//               <input type="email" />
//               <br />
//               <br />
//               <p>Password</p>
//               <input type="password"  />
//               <br />
//               <button>Login</button>
//             </form>
//             <br />
//             <a href="/company/register">Create new Account ?</a>
//             <br />
//             <a>Foreget password ?</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginScreen;
