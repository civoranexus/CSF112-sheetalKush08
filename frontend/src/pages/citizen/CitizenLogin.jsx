import React from 'react'

const CitizenLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 shadow-lg rounded-lg w-[320px]">
        <h1 className="text-xl font-semibold mb-4">Citizen Login</h1>
        <input type="text" placeholder="Email / Phone" className="border p-2 w-full mb-3"/>
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3"/>
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
      
    </div>
  )
}

export default CitizenLogin
