import React from 'react'
import CitizenLogin from './pages/citizen/CitizenLogin'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/report" element={<div>Citizen Reporting Form</div>} />
        <Route path="/track" element={<div>Track Case Page</div>} />
        <Route path="/awareness" element={<div>Awareness Page</div>} />
        <Route path="/citizen/login" element={<div>Citizen Login</div>} />
        <Route path="/official/login" element={<div>Official Login</div>} />
      </Routes>
      <CitizenLogin/>
    </div>
  )
}

export default App
