import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter , setCounter] = useState(0)

const addValue = () =>{
  setCounter(counter + 1)
  console.log("Cliecked Value :" , counter); 
}

const delValue = () => {
  setCounter(counter - 1)
}

const resetValue = () => {
  setCounter(0)
}


return (
  <>
  <div className='flex flex-col justify-center items-center bg-indigo-500-600 h-screen w-screen bg-gradient-to-r from-purple-950 to-indigo-950'>
  <div className='flex flex-col justify-center items-center rounded-3xl gap-10  w-[700px] h-[600px] bg-gradient-to-t from-purple-300 to-indigo-200'>
  <h1 className='flex justify-center items-center text-4xl font-extrabold text-purple-950'> Counter Update Usesing React </h1>
  <h2 className='flex justify-center items-center text-4xl font-bold text-purple-950'>Counter Value : {counter}</h2>
  
  <div className='flex flex-col justify-center items-center gap-3'>
  <button onClick={addValue} className='bg-purple-950 px-4 py-2 rounded-2xl text-white text-xs'>Add Value</button>
  <button onClick={delValue} className='bg-purple-950 px-4 py-2 rounded-2xl text-white text-xs'>Del Value </button>
  <p onClick={resetValue}className='bg-purple-950 px-4 py-2 rounded-2xl text-white text-xs'>Reset All</p>
  <h1 className='text-purple-950 px-8 py-2 rounded-2xl text-2xl font-bold'> Usesing React useState Hook & Creat Counter update </h1>
  </div>
  </div>
  </div>
    
  </>
)
}

export default App
