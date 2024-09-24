import {Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup'
import {Toaster} from 'sonner'
import Login from './pages/login'
import Homepage from './pages/Homepage'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'
export default function App() {
  return (
   <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>} />

      <Route element={<PrivateRoute allowrole={['user']}/>}>
      <Route path="/" element={<Homepage/>}/>
      </Route>

      <Route element={<PrivateRoute allowrole={['admin']}/>}>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Route>
       
      
    </Routes>
    <Toaster position="bottom-right" />
   </div>
  )
}
// import React from 'react'
// import Signup from '/pages/Signup'
// import { Routes, Route } from 'react-router-dom'
// import AuthForm from './pages/AuthForm'
// import { Toaster } from 'sonner'
// const App = () => {
//   return (
//     <>
//     <Routes>
//       <Route path="/register" element={<Signup />} />
//       <Route path="/login" element={<AuthForm/>}/>
//     </Routes>
//     <Toaster position='bottom-right' />
//     </>
// )}

// export default App