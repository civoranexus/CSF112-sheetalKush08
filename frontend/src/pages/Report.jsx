import React, { useState } from "react";
import AnonymousForm from "../components/forms/AnonymousForm";
import RegisteredForm from "../components/forms/RegisteredForm";

const Report = () => {
  const [mode, setMode] = useState("anonymous");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        CyberThana-Report Cyber Crime
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setMode("anonymous")}
          className={`px-6 py-2 rounded-lg ${
            mode === "anonymous" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Anonymous Report
        </button>

        <button
          onClick={() => setMode("registered")}
          className={`px-6 py-2 rounded-lg ${
            mode === "registered" ? "bg-green-600" : "bg-gray-700"
          }`}
        >
          Registered Report
        </button>
      </div>

      {mode === "anonymous" ? <AnonymousForm /> : <RegisteredForm />}
    </div>
  );
};

export default Report;
