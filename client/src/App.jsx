import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Component/Register'
import Login from './Component/Login'
import AddTask from './Component/AddTask'

function App() {


  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/addTask" element={<AddTask />} />
        </Routes>

      </div>
    </>
  )
}

export default App
