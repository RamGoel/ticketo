"use client";

import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const handleGoogleSignIn = async () => {
    const loadingToastId = toast.loading("Signing in with Google...");
    try {
      await signIn("google");
      toast.dismiss(loadingToastId);
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Failed to sign in with Google.");
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="google-sign-in"
    >
      <FaGoogle /> Sign in with Google
    </button>
  );
};

export default Login;
