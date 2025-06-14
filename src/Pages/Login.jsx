import React, { useState } from "react";
import axios from "axios";
import {
  signInWithPopup,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../firebaseConfig";
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      // Optional: Send token to backend
      const res = await axios.post(
        "http://localhost:5000/api/auth/google-login",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Backend response:", res.data);
      login(res.data);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleSendEmailLink = async () => {
    const actionCodeSettings = {
      url: process.env.REACT_APP_BASE_URL, // redirect back to same page
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Email sent! Check your inbox.");
    } catch (error) {
      console.error("Failed to send sign-in link:", error);
    }
  };

  const checkEmailLinkLogin = async () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let emailFromStorage = window.localStorage.getItem("emailForSignIn");
      if (!emailFromStorage) {
        emailFromStorage = window.prompt(
          "Please provide your email for confirmation"
        );
      }

      try {
        const result = await signInWithEmailLink(
          auth,
          emailFromStorage,
          window.location.href
        );
        const token = await result.user.getIdToken();
        await axios.post(
          "http://localhost:5000/api/auth/email-login",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        window.localStorage.removeItem("emailForSignIn");
        navigate.push("/");
      } catch (err) {
        console.error("Email link sign-in error:", err);
      }
    }
  };

  React.useEffect(() => {
    checkEmailLinkLogin();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <button
          className="btn btn-danger w-100 mb-3"
          onClick={handleGoogleLogin}
        >
          <i className="bi bi-google me-2"></i> Sign in with Google
        </button>

        <div className="text-center my-3">or</div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleSendEmailLink}
          disabled={!email}
        >
          Login via Email OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
