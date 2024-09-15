import React, { useRef, useState } from "react";
import Header from "./Header";
import headerLogo from "../assets/header-logo.jpg";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data:

    console.log("Email: ", email.current.value);
    console.log("Password: ", password.current.value); 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>

      <Header />
      
      <div className="absolute">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-8 bg-black my-36 mx-auto right-[32%] left-[32%] text-white rounded-lg bg-opacity-80"
      >
        
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button className="p-2 my-3 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
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
