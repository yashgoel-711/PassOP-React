import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex flex-col justify-center h-16 items-center '>
       <div className='text-3xl mt-2 '>
       <span className='text-green-600 font-bold'>&lt; </span>
        <span className='tracking-wide text-white'> PassOP </span>
        <span className='text-green-600 font-bold'> /&gt;</span>
       </div>
       <div>
        <h1 className='tracking-widest font-light '>Your Password Manager</h1>
       </div>
    </nav>
  )
}

export default Navbar
