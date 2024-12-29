import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useRef, useEffect, useState } from 'react';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Body = () => {
  const ref = useRef();  
  const [Profiles, setProfiles] = useState([])
  
  const [Profile, setProfile] = useState({
    url: '',
    username: '',
    password: ''
  })

  useEffect(() => {
    let data = localStorage.getItem("Profiles")
    if (data) {
      setProfiles(JSON.parse(data))
    }
  }, [])
  
  const handleChange = (e) => {
    setProfile({
      ...Profile, [e.target.name]: e.target.value
    })
  }
  
  const handleAdd = () => {    
    const updatedProfiles = [...Profiles, Profile];
    setProfiles(updatedProfiles);
    setProfile({
      url: '',
      username: '',
      password: ''
    }) 
    localStorage.setItem("Profiles", JSON.stringify(updatedProfiles));
  }

  const showPassword = () => {
    if (ref.current.state.includes('hover-searching')) {
      ref.current.state = 'hover-blink';
    }
    else {
      ref.current.state = 'hover-searching';
    }
    let inp = document.getElementById('inp-pass');
    if (inp.type === 'password') {
      inp.type = 'text';
    } else {
      inp.type = 'password';
    }
  }
  return (
    <div className='md:w-[60vw] mx-auto min-h-[60vh] bg-[#efcdff17]  rounded-lg mt-10 p-10'>
      <div className='flex flex-col gap-4 mb-6'>

        <div className='' >
          <input onChange={handleChange} className='outline-none border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full w-full px-3 ' type="url" value={Profile.url} name="url" id="" placeholder='Enter URL' required />
        </div>
        <div className='flex gap-2 md:gap-8 md:flex-row flex-col relative'>
          <input onChange={handleChange} type="text" value={Profile.username} className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Username' name="username" id="" required />


          <input onChange={handleChange} type="Password" value={Profile.password} className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Password' name="password" id="inp-pass" required />
          <span className='right-[-8px] top-[-7px] absolute cursor-pointer' onClick={showPassword}>
            <lord-icon ref={ref} src="/src/assets/icons/eye-blink.json" trigger="loop" delay="1000" state="hover-blink" style={{width : "100px", height : "45px"}}></lord-icon>
          </span>

        </div>

        <div className='flex justify-center '>
          <button onClick={handleAdd}  className=' flex items-center px-3 py-1 rounded-full gap-2 bg-black hover:text-violet-500'>
            <lord-icon trigger="morph" src="/src/assets/icons/folder.json"></lord-icon>
            <h1 className='text-green-500'>Add Password</h1>
          </button>
        </div>

      </div>
      <div className='flex justify-center '>
        <h1 className='bg-gradient-to-l from-indigo-500 w-[30%] h-[1.9px] '></h1>
        <h1 className='bg-gradient-to-r from-indigo-500 w-[30%] h-[1.9px] '></h1>
      </div>

      <div>
        <div className="profiles mt-8 mx-auto">
          <div className='border-1 overflow-hidden border-green-500 rounded-md w-fit p-1 mx-auto'>

          <table className='w-[100%] bg-gradient-to-r from-slate-800 to-slate-900 text-white '>
            {Profiles.map((profile) => {
              return (
                <>
              <tr>  
                <td className='p-2 border-2 border-green-500 '><a target='_blank' href={profile.url}>{profile.url}</a></td>
                <td className='p-2 border-2 border-green-500'>{profile.username}</td>
                <td className='p-2 border-2 border-green-500'>{profile.password}</td>
              </tr>
            </>
            )
          })}
          </table>
          </div>
      </div>
        </div>
      </div>

  

  )
}

export default Body
