import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Patient");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert(`Account created successfully as ${role}!`);

    // Redirect to login page after signup
    navigate("/login");
  };

  return (
    <div className="signup-page">

      {/* LEFT SIDE */}
      <div className="signup-left">

        <div className="signup-brand">
          <div className="signup-logo">🏥</div>

          <div>
            <h2>SwasthyaConnect</h2>
            <span>Healthcare for Everyone</span>
          </div>
        </div>

        <div className="signup-left-content">

          <span className="signup-badge">
            🩺 Join SwasthyaConnect
          </span>

          <h1>
            Better Healthcare
            <span> Starts With You</span>
          </h1>

          <p>
            Create your SwasthyaConnect account and connect with
            patients, doctors and health workers through one
            simple healthcare platform.
          </p>

          <div className="signup-benefits">

            <div className="signup-benefit">
              <div>✓</div>
              <span>Easy healthcare access</span>
            </div>

            <div className="signup-benefit">
              <div>✓</div>
              <span>Connect with healthcare professionals</span>
            </div>

            <div className="signup-benefit">
              <div>✓</div>
              <span>Manage appointments easily</span>
            </div>

            <div className="signup-benefit">
              <div>✓</div>
              <span>Secure healthcare platform</span>
            </div>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="signup-right">

        <div className="signup-box">

          <div className="signup-heading">

            <div className="mobile-signup-logo">
              🏥
            </div>

            <h1>Create Account</h1>

            <p>
              Join SwasthyaConnect today
            </p>

          </div>


          {/* ROLE */}
          <div className="signup-role-section">

            <label>Register as</label>

            <div className="signup-role-buttons">

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


          {/* FORM */}
          <form onSubmit={handleSignup}>

            {/* NAME */}
            <div className="signup-input-group">

              <label htmlFor="name">
                Full Name
              </label>

              <div className="signup-input-wrapper">

                <span>👤</span>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className="signup-input-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="signup-input-wrapper">

                <span>📧</span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* PHONE */}
            <div className="signup-input-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <div className="signup-input-wrapper">

                <span>📱</span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="signup-input-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="signup-input-wrapper">

                <span>🔒</span>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="signup-input-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="signup-input-wrapper">

                <span>🔐</span>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* TERMS */}
            <div className="signup-terms">

              <label>
                <input type="checkbox" required />

                <span>
                  I agree to the Terms of Service and
                  Privacy Policy.
                </span>
              </label>

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="signup-submit-button"
            >
              Create {role} Account →
            </button>

          </form>


          {/* LOGIN */}
          <div className="signup-login">

            <span>Already have an account?</span>

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </div>


          <div className="signup-security">
            🔒 Your information is protected
          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;