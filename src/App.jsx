import { useState } from 'react'
import './styles/global.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/navbar.jsx'
import Home from './pages/Home.jsx'


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
