import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Body from './components/body'


function App() {


  return (
    <>
    <div className='h-[100vh] w-[100vw] '>
    <div className="relative h-[100%] w-[100%]  bg-slate-950 text-green-700">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    <header>
      <Navbar />      
    </header>
    <main>
      <Body />
    </main>
    </div>
    </div>
    </>
  )
}

export default App
