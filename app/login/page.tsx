"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const handleUserNameChange = (e: { target: { value: any } }) => {
    const newUserName = e.target.value;
    setUserName(newUserName);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userName || !password) {
      setPasswordError("Please enter both username and password.");
      return;
    }
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <div className="w-1/2 relative">
       <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/truck.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-900 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8">
          <h1 className="text-6xl font-bold mb-6 text-white">Welcome!</h1>
          <p className="text-3xl mb-72 text-white">
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
            <h1 className="text-6xl font-bold mb-6 text-yellow-500">Login</h1>
            <form onSubmit={handleSubmit} className="w-2/3">
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-8">
                <div className="relative">
                  <label
                    htmlFor="PhoneNumber"
                    className="text-white block mb-1"
                  ></label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Phonenumber"
                    id="phoneumber"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                    required
                  />
                  <span
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              {passwordError && (
                <p className="text-red-500 mb-4">{passwordError}</p>
              )}
              <Link href="/SignUp">
              <button
                type="submit"
                className="w-32 ml-10 h-14 bg-transparent border-green-500 border-2 text-yellow-500 text-white hover:bg-yellow-500 hover:text-white font-bold shadow-md"
              >
                    
       Log In

              </button>
              </Link>
            </form>
            <p className="mt-4 text-black-500">
              Don't have an account?{" "}
              <p className="mt-4 text-black-500">
                <Link href="/SignUp" legacyBehavior>
                  <p className="text-yellow-500">SignUp</p>
                </Link>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
