import React, { useState } from "react";

const AnonymousForm = () => {
  const [data, setData] = useState({
    incidentType: "",
    description: "",
    location: "",
    evidence: null,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in data) formData.append(key, data[key]);

    await fetch("http://localhost:5000/report/anonymous", {
      method: "POST",
      body: formData,
    });

    alert("Anonymous Report Submitted Successfully");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-800 p-6 rounded-xl max-w-3xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Anonymous Complaint</h2>

      <label>Incident Type</label>
      <input
        type="text"
        className="w-full p-2 mb-3 rounded text-black"
        onChange={(e) => setData({ ...data, incidentType: e.target.value })}
      />

      <label>Description</label>
      <textarea
        className="w-full p-2 mb-3 rounded text-black"
        rows={4}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <label>Location (Optional)</label>
      <input
        type="text"
        className="w-full p-2 mb-3 rounded text-black"
        onChange={(e) => setData({ ...data, location: e.target.value })}
      />

      <label>Upload Evidence (Optional)</label>
      <input
        type="file"
        className="w-full p-2 mb-3 rounded"
        onChange={(e) => setData({ ...data, evidence: e.target.files[0] })}
      />

      <button className="bg-blue-600 px-4 py-2 rounded mt-3">
        Submit Report
      </button>
    </form>
  );
};

export default AnonymousForm;
