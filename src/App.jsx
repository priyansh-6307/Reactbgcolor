import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, changecolor] = useState("hotpink")

  function redchange(){
    changecolor("red")
  }
  function violetchange(){
    changecolor("violet")
  }
  function greenchange(){
    changecolor("lightgreen")
  }
  function violetchange(){
    changecolor("violet")
  }
  function aquachange(){
    changecolor("aqua")
  }
  function whitechange(){
    changecolor("olive")
  }

  return (
    <>
  <div className='
  w-full h-screen duration-200  over' style={{backgroundColor:color}}>
    <div className='absolute flex flex-wrap justify-center bottom-10 inset-x-0 px-2 gap-9 '>
      <div className='fixed flex flex-wrap justify-center gap-6 shadow-lime-500 bg-white px-9 py-3 rounded-xl bottom-10'>
    <button className='border-2 bg-red-600 gap-19 rounded-xl px-2 text-white ' onClick={redchange} >Red</button>
    <button className='border-2 bg-violet-600 px-2 text-white rounded-xl' onClick={violetchange} >Violet</button>
    <button className='border-2 bg-green-400 px-2 text-white rounded-xl' onClick={greenchange} >Green</button>
    <button className='border-2 bg-blue-700 px-2 text-white rounded-xl' onClick={aquachange} >Aqua</button>
    <button className='border-2 rounded-xl text-white px-2'style={{backgroundColor:'olive'}} onClick={whitechange} >olive</button>
    </div>
    </div>
  </div>
  
    </>
  )
}

export default App
