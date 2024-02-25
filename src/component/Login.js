import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSignup, setSignup] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignUp = () => {
    setSignup(!isSignup);
  };

  const handleSignUp = async (email, password) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHRHZGeyWyEmsLOypf5MuSxAz2c7vWeic",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setErrMsg("Registration successful");
    } catch (error) {
      console.error("Registration error:", error.message);
      setErrMsg("Registration error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHRHZGeyWyEmsLOypf5MuSxAz2c7vWeic",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!data.ok) {
        setErrMsg("Authentication failed!");
        setLoading(false);
        return;
      }
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.error("Login error:", error.message);
      setErrMsg("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    const msg = validateForm(email, password);
    setErrMsg(msg);
    console.log(isSignup);
    if (errMsg === null && isSignup) {
      handleSignUp(email, password);
    } else if (errMsg === null && !isSignup) {
      handleLogin(email, password);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black block my-28 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-white text-3xl m-2">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isSignup && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className="py-2 px-4 m-2 w-full text-white bg-gray-700 bg-opacity-50 rounded"
          />
        )}
        <input
          type="email"
          ref={emailRef}
          placeholder="Email or phone number"
          className="py-2 px-4 m-2 w-full text-white text-md bg-gray-700 bg-opacity-50 rounded "
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="py-2 px-4 m-2 w-full text-white text-md bg-gray-700 bg-opacity-50 rounded"
        />
        {errMsg && <p className="text-md text-red-500 p-2 m-2">{errMsg}</p>}
        <button
          className={`text-white text-l p-2 m-2 w-full rounded cursor-pointer ${
            loading ? "bg-red-400" : "bg-red-700"
          }`}
          onClick={handleFormSubmit}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="text-l text-white my-5 mx-2 cursor-pointer"
          onClick={toggleSignUp}
        >
          {isSignup
            ? "Already a user , Sign In"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
