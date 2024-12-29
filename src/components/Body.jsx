import React from 'react'


const Body = () => {

  return (
    <div className='md:w-[60vw] mx-auto h-[60vh] bg-[#efcdff17] text-white rounded-lg mt-10 p-10'>
      <div className='flex flex-col gap-4 mb-6'>

        <div className='' >
          <input className='outline-none border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full w-full px-3 ' type="url" name="" id="" placeholder='Enter URL'/>
        </div>
        <div className='flex gap-2 md:gap-8 md:flex-row flex-col '>
          <input type="text" className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Username' name="" id="" />
          <input type="Password" className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Password' name="" id="" />
        </div>

        <div className='flex justify-center '>        
          <button className=' flex items-center px-3 py-1 rounded-full gap-2 bg-black hover:text-violet-500'>
            <lord-icon src="https://cdn.lordicon.com/qtebspeb.json" trigger="morph" state="morph-open" className ="w-[150px] h-[150px]"></lord-icon>
          <h1>Add Password</h1>
          </button>
          </div>

        </div>
        <div className='flex justify-center '>          
        <h1 className='bg-gradient-to-l from-indigo-500 w-[30%] h-[1.9px] '></h1>
        <h1 className='bg-gradient-to-r from-indigo-500 w-[30%] h-[1.9px] '></h1>
        </div>
      </div>

  )
}

export default Body
