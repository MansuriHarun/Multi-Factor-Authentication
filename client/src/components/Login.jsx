import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8000/api/v1/login", {
        email,
        password,
      });

      if (response.data.success) {
        setShowOtpField(true);
        alert("OTP sent to your email. Check your inbox.");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("An error occurred during login");
    }
  };
  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const otpResponse = await Axios.post(
        "http://localhost:8000/api/v1/verify-otp",
        {
          otp,
        }
      );

      if (otpResponse.data.success) {
        alert("OTP Verified. User logged in.");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
      alert("An error occurred during OTP verification");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {showOtpField && (
          <>
            <div>
              <label>OTP:</label>
              <input
                type="text"
                placeholder="OTP"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button className="login-button" onClick={handleOtpVerification}>
              Verify OTP
            </button>
          </>
        )}
        {!showOtpField && (
          <button type="submit" className="login-button">
            Login
          </button>
        )}
      </form>
      <Link to="/" className="link">
        Don't have an account? Register
      </Link>
    </div>
  );
}

export default Login;
