import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignup, setSignup] = useState(false);

  const toggleSignUp = () => {
    setSignup(!isSignup);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black block my-28 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-white text-3xl m-2">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 px-4 m-2 w-full bg-gray-700 bg-opacity-50 rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="py-2 px-4 m-2 w-full bg-gray-700 bg-opacity-50 rounded "
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 m-2 w-full bg-gray-700 bg-opacity-50 rounded"
        />
        <button className="text-white text-l bg-red-700 p-2 m-2 w-full rounded cursor-pointer">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-l text-white my-5 mx-2 cursor-pointer" onClick={toggleSignUp}>
          {isSignup
            ? "Already a user , Sign In"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
