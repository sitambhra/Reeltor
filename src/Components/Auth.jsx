import { SignedIn, SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Auth = ({ mode }) => {
  const isSignedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) navigate("/");
  }, [isSignedIn, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 bg-white rounded-2xl shadow-xl">
        {mode === "sign-in" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
