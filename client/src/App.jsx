import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Component/Register'
import Login from './Component/Login'
import AddTask from './Component/AddTask'
import Private from './Private'

function App() {


  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Private />}>
            <Route path="user/addTask" element={<AddTask />} />
          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
