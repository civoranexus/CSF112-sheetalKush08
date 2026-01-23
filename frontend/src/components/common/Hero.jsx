import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="h-[88vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            CyberThana - Rural Cybercrime Reporting Portal
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Secure. Simple. Accessible. Empowering rural citizens to safely
            report cybercrimes and get timely support from cyber officials.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/report"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            >
              Report Cybercrime
            </Link>

            <Link
              to="/awareness"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
            >
              Safety Awareness
            </Link>

            <Link
              to="/track"
              className="px-6 py-3 border border-white rounded-lg font-semibold"
            >
              Track Complaint
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
