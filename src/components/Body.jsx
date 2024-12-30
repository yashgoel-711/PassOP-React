import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useRef, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Body = () => {
  const ref = useRef();
  const ref2 = useRef();
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
  const handleCopy = (text) => {
    toast.success(' Copied To Clipboard!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      
    });
    navigator.clipboard.writeText(text);

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
    <div className='md:w-[60vw] mx-auto min-h-[60vh] bg-[#efcdff17] rounded-lg mt-10 p-10'>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        
      />
      <div className='flex flex-col gap-4 mb-6'>

        <div className='' >
          <input onChange={handleChange} className='outline-none border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full w-full px-3 ' type="url" value={Profile.url} name="url" id="" placeholder='Enter URL' required />
        </div>
        <div className='flex gap-2 md:gap-8 md:flex-row flex-col relative'>
          <input onChange={handleChange} type="text" value={Profile.username} className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Username' name="username" id="" required />


          <input onChange={handleChange} type="Password" value={Profile.password} className='outline-none  border-2 border-blue-500 focus:ring-2 focus:ring-green-500 rounded-full px-3 md:w-1/2' placeholder='Enter Password' name="password" id="inp-pass" required />
          <span className='right-[-8px] top-[-7px] absolute cursor-pointer' onClick={showPassword}>
            <lord-icon ref={ref} src="/src/assets/icons/eye-blink.json" trigger="loop" delay="1000" state="hover-blink" style={{ width: "100px", height: "45px" }}></lord-icon>
          </span>

        </div>

        <div className='flex justify-center '>
          <button onClick={handleAdd} className=' flex items-center px-3 py-1 rounded-full gap-2 bg-black hover:text-violet-500'>
            <lord-icon trigger="morph" src="/src/assets/icons/folder.json"></lord-icon>
            <h1 className='text-green-500'>Add Password</h1>
          </button>
        </div>

      </div>
      <div className='flex justify-center '>
        <h1 className='bg-gradient-to-l from-indigo-500 w-[30%] h-[1.9px] '></h1>
        <h1 className='bg-gradient-to-r from-indigo-500 w-[30%] h-[1.9px] '></h1>
      </div>


      <div className="profiles w-[90%] mt-8">


        <table className='border-2 border-green-500 text-center table-fixed w-full mx-auto bg-gradient-to-r from-slate-800 to-slate-900 text-white '>
                <tr>
                  <th>Site</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
          {Profiles.map((profile) => {
            return (
              <>
                <tr>
                  <td className='break-words border-2 border-green-500 '>
                    <a target='_blank' href={profile.url}><h1 className='p-4 '>{profile.url}</h1></a>
                    <div className="cursor-pointer">
                      <lord-icon onClick={() => { handleCopy(profile.url) }} src="/src/assets/icons/copy.json" trigger="hover" state="hover-slide" ></lord-icon>
                    </div>
                  </td>
                  <td className='break-words border-2 border-green-500 '>
                    <h1 className='p-4'>{profile.username}</h1>
                    <div className="cursor-pointer">
                      <lord-icon onClick={() => { handleCopy(profile.username) }} src="/src/assets/icons/copy.json" trigger="hover" state="hover-slide" ></lord-icon>
                    </div>
                  </td>
                  <td className='break-words border-2 border-green-500 '>
                    <h1 className='p-4'>{profile.password}</h1>
                    <div className="cursor-pointer">
                      <lord-icon onClick={() => { handleCopy(profile.password) }} src="/src/assets/icons/copy.json" trigger="hover" state="hover-slide" ></lord-icon>
                    </div>
                  </td>
                  <td className='break-words border-2 border-green-500 '>
                      <lord-icon onClick={() => { handleCopy(profile.password) }} src="/src/assets/icons/edit.json" trigger="loop" state="hover-circle" ></lord-icon>
                    
                  </td>
                </tr>
              </>
            )
          })}
        </table>
      </div>

    </div>




  )
}

export default Body
