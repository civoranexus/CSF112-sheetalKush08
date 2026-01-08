import React from 'react'
import CitizenLogin from './pages/citizen/CitizenLogin'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <CitizenLogin/>
    </div>
  )
}

export default App
