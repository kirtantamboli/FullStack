import React from 'react'
import Signup from './PAGES/SIGNUP'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Autoform />} />
    </Routes>
  )
}

export default App