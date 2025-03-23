import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import UserDetais from './pages/UserDetais' 
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/adduser' element={<AddUser />} />
            <Route path='/userdetails' element={<UserDetais />} />

        </Routes>
    </div>
  )
}

export default App
