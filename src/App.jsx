import { useState } from 'react'
import './styles/global.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/navbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Stack from './pages/Stack.jsx'
import Blog from './pages/Blog.jsx'


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
