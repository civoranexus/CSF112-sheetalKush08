import React from "react";

const CitizenLogin = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center py-10">
      <h2 className="text-sm text-gray-300 tracking-wider">
        CyberThana-Rural Cybercrime Reporting Portal
      </h2>
      <h1 className="text-4xl font-extrabold mt-3 mb-6">Citizen Login</h1>
      <div
        className="bg-neutral-800/70 border border-gray-700 rounded-2xl px-8 py-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] w-[380px] backdrop-blur-md
                      transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,170,255,0.5)] hover:border-cyan-400"
      >
        <input
          type="text"
          placeholder="Email / Phone"
          className="bg-neutral-900 border border-gray-600 text-white p-3 w-full rounded-lg mb-3
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-neutral-900 border border-gray-600 text-white p-3 w-full rounded-lg mb-4
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />

        <button
          className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600
                           shadow-lg hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02]
                           transition-all duration-300"
        >
          Login
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account?
          <span className="text-cyan-400 cursor-pointer hover:underline ml-1">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default CitizenLogin;
