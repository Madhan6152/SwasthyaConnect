import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check whether email and password are entered
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Redirect according to selected role
    if (role === "Patient") {
      navigate("/patient");
    }
    else if (role === "Doctor") {
      navigate("/doctor");
    }
    else if (role === "Health Worker") {
      navigate("/worker");
    }
    else if (role === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-brand">
          <div className="login-logo">🏥</div>

          <div>
            <h2>SwasthyaConnect</h2>
            <span>Healthcare for Everyone</span>
          </div>
        </div>

        <div className="login-left-content">

          <span className="login-badge">
            🩺 Digital Healthcare Platform
          </span>

          <h1>
            Connecting You
            <span> To Better Healthcare</span>
          </h1>

          <p>
            Access doctors, health workers, appointments and
            healthcare services through one simple platform.
          </p>

          <div className="login-features">

            <div className="login-feature">
              <span>✓</span>
              <div>
                <strong>Connect with Doctors</strong>
                <p>Access healthcare professionals remotely.</p>
              </div>
            </div>

            <div className="login-feature">
              <span>✓</span>
              <div>
                <strong>Health Worker Support</strong>
                <p>Get assistance from nearby health workers.</p>
              </div>
            </div>

            <div className="login-feature">
              <span>✓</span>
              <div>
                <strong>Easy Appointments</strong>
                <p>Book and manage your healthcare appointments.</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-box">

          <div className="login-heading">

            <div className="mobile-login-logo">
              🏥
            </div>

            <h1>Welcome Back</h1>

            <p>
              Login to your SwasthyaConnect account
            </p>

          </div>


          {/* ROLE SELECTION */}
          <div className="role-section">

            <label>Login as</label>

            <div className="role-buttons">

              <button
                type="button"
                className={role === "Patient" ? "selected" : ""}
                onClick={() => setRole("Patient")}
              >
                👤
                <span>Patient</span>
              </button>

              <button
                type="button"
                className={role === "Doctor" ? "selected" : ""}
                onClick={() => setRole("Doctor")}
              >
                👨‍⚕️
                <span>Doctor</span>
              </button>

              <button
                type="button"
                className={
                  role === "Health Worker" ? "selected" : ""
                }
                onClick={() => setRole("Health Worker")}
              >
                🧑‍⚕️
                <span>Health Worker</span>
              </button>

              <button
                type="button"
                className={role === "Admin" ? "selected" : ""}
                onClick={() => setRole("Admin")}
              >
                🛡️
                <span>Admin</span>
              </button>

            </div>

          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            <div className="login-input-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="login-input-wrapper">

                <span>📧</span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>


            <div className="login-input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    alert("Password reset page will open here.")
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <div className="login-input-wrapper">

                <span>🔒</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

            </div>


            <div className="remember-me">

              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

            </div>


            <button
              type="submit"
              className="login-submit-button"
            >
              Login as {role} →
            </button>

          </form>


          {/* SIGN UP */}
          <div className="login-signup">

            <span>Don't have an account?</span>

            <button
              type="button"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>

          </div>


          <div className="login-security">
            🔒 Your information is protected
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
