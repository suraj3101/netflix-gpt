import React, { useState } from "react";
import Header from "./Header";
import headerLogo from "../assets/header-logo.jpg";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      <form className="absolute p-8 bg-black my-36 mx-auto right-[32%] left-[32%] text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <button className="p-2 my-3 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" 
            onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
