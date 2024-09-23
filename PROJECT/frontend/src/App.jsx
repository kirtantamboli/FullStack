import React from 'react'
import Signup from '/PAGES/SIGNUP'
import { Routes, Route } from 'react-router-dom'
import AuthForm from './pages/AuthForm'
import { Toaster } from 'sonner'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<AuthForm/>}/>
    </Routes>
    <Toaster position='bottom-right' />
    </>
)}

export default App