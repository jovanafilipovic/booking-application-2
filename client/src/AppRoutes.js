import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login.tsx'
import React from 'react'
import { SignUp } from './components/SignUp.tsx'
import { HomePage } from './components/HomePage.tsx'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/signup' element={<SignUp />}> </Route>
        </Routes>
    </Router>
  )
}
