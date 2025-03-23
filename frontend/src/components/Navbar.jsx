import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 font-medium '>
      <h1 className='text-3xl font-bold font-sans text-red-400'>Hi</h1>
      <ul className='sm:flex gap-7 hidden text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
        <NavLink to='/adduser' className='flex flex-col items-center gap-1'>
          <p>Add User</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/userdetails' className='flex flex-col items-center gap-1'>
          <p>User Details</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      
    </div>
  )
}

export default Navbar
