"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };
  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (confirmPassword && newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      setPasswordError("Passwords do not match");
    } else {
      setPasswordsMatch(true);
      setPasswordError("");
    }
  };
  const handleConfirmPasswordChange = (e: { target: { value: any } }) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (password && newConfirmPassword !== password) {
      setPasswordsMatch(false);
      setPasswordError("Passwords do not match");
    } else {
      setPasswordsMatch(true);
      setPasswordError("");
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  function setFirstName(value: string): void {
    throw new Error("Function not implemented.");
  }
  function setLastName(value: string): void {
    throw new Error("Function not implemented.");
  }
  function setUserName(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <div className="w-1/2 relative">
        
        <div className="absolute top-0 left-0 w-full h-full bg-green-900 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8">
          <h1 className="text-6xl font-bold mb-6 text-white">Welcome!</h1>
          <p className="text-3xl mb-80 text-white">
            We are committed to making waste{" "}
            <span className="text-yellow-500">collection</span> and{" "}
            <span className="text-yellow-500">recycling</span> easy and
            convenient.
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-green-950">
        <div className="w-full h-full text-white flex flex-col items-center justify-center">
          <div className="text-white px-8">
            <h1 className="text-5xl font-bold mb-4 text-yellow-500">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-2/3">
            <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                  onChange={e=>setUserName(e.target.value)}
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-2 py-2 mb-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                  onChange={e=>setFirstName(e.target.value)}
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold mr-40"
                  required
                  onChange={e=>setLastName(e.target.value)}
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="text"
                  placeholder="Phonenumber"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-6 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="text-white block mb-8"
                  ></label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                    required
                  />
                  <span
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={() => togglePasswordVisibility("password")}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="text-white block mb-8"
                  ></label>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    placeholder="Confirm your password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                    required
                  />
                  <span
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              {!passwordsMatch && (
                <p className="text-red-500 mb-4">{passwordError}</p>
              )}
              <Link href="/login">
              <button
              type="submit"
                className="w-32 ml-24 h-14 bg-transparent border-green-500 border-2 text-yellow-500 text-white hover:bg-yellow-500 hover:text-white font-bold shadow-md"
                disabled={!passwordsMatch}
              >
                Sign Up
              </button>
              </Link>
              <p className="mt-4 text-black-500">
                Already have an account?{" "}
                <Link href="/login">
                  <p className="text-yellow-500">Login</p>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
