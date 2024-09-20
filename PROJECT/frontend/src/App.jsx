import React from 'react'
import Signup from './PAGES/SIGNUP'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/register" element={<Signup />} />
    </Routes>
    <Toaster position='bottom-right' />
    </>
)}
export default App