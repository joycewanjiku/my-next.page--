"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "@/config";



const Login = () => {
  const [phonenumberVisible, setPhonenumberVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonenumberError, setPhonenumberError] = useState("");
  const togglePasswordVisibility = () => {
    setPhonenumberVisible(!phonenumberVisible);
  };
  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    const newPhonenumber = e.target.value;
    setPhoneNumber(newPhonenumber);
  };
  const handleemailChange = (e: { target: { value: any } }) => {
    const newemail= e.target.value;
    setEmail(newemail);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !phoneNumber) {
      setPhonenumberError("Please enter both email and phonenumber.");
      return;
    }
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const data = {
      email: email,
      phoneNumber: phoneNumber
      };
      console.log(data)
  
      await axios.post(`${BASE_URL}/api/login/`, data)
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            window.location.href = "/login";
          } else {
            alert("There was an error login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  function handlePhonenumberChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <div className="w-1/2 relative">
      <Image
  src="/images/truck.jpg"
  alt="Background Image"
  layout="fill"
  objectFit="cover"
  objectPosition="center"
  priority={true}
/>
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
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="border-green-500 border-2 rounded-lg bg-opacity-20 bg-green-900 px-4 py-2 mb-3">
                <div className="relative">
                  <label
                    htmlFor="PhoneNumber"
                    className="text-white block mb-1"
                  ></label>
                  <input
                    type={phonenumberVisible ? "text" : "password"}
                    placeholder="Phonenumber"
                    id="phonenumber"
                    value={phoneNumber}
                    onChange={handlePhonenumberChange}
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-white-500 placeholder-opacity-60 focus:outline-none font-bold"
                    required
                  />
                </div>
              </div>
              {phonenumberError && (
                <p className="text-red-500 mb-4">{phonenumberError}</p>
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
