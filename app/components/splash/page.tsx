import React from "react";
import "typeface-poppins";
import Link from "next/link";

const LogInAs = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div>
        <div
          className="bg-cover bg-center bg-opacity-20"
          style={{
            backgroundImage: "url(/images/truck.jpg)",
            backgroundColor: "rgba(0, 60, 30, 0.2)",
            fontFamily: "Poppins, sans-serif",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mt-10">
            <Link href="/SignUp">
              <button
                className="bg-transparent border-3 border-yellow-500 text-white text-2xl px-8 py-4 rounded-full mr-5"
                style={{
                  borderRadius: "20px",
                  border: "3px solid #E1AD01",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                Waste Recyclers
              </button>
            </Link>
            <Link href="/SignUp">
              <button
                className="bg-transparent border-3 border-yellow-500 text-white text-2xl px-8 py-4 rounded-full"
                style={{
                  borderRadius: "20px",
                  border: "3px solid #E1AD01",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                Waste Collectors
              </button>
            </Link>
            <Link href="/convasation">
                  <p className="text-yellow-500">Convasation</p>
                </Link>
                <Link href="/addCart">
                  <p className="text-yellow-500">AddCart</p>
                </Link>
          </div>
        </div>
      </div>
      <div className="mt-0"></div>
    </div>
  );
};
export default LogInAs;
