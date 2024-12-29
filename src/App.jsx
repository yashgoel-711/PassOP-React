import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Body from './components/Body'


function App() {


  return (
    <>
    <div className='h-screen w-[100vw] overflow-hidden'>
    <div class="relative h-full  bg-slate-950 text-green-500">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
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
