import { useState } from 'react'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import UserTable from './pages/UserTable'
import { Route, Link, Routes , useNavigate  } from 'react-router-dom';
import User from './components/User/User'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/admin' element={<UserTable />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
