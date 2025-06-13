import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import axios from "axios";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      // Optional: Send token to backend
      const res = await axios.post("http://localhost:5000/api/auth/google-login", {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Backend response:", res.data);
      alert("Login successful");

    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
