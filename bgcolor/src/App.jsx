import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color, setColor] = useState("olive")
const [name, setName] = useState("Ummsi")

return (
<>
<div className='w-full h-screen duration-200'
style={{backgroundColor: color}}
>
  <div className='flex flex-wrap justify-center items-center px-3 py-5'>

    <div className='flex flex-wrap items-center justify-center gap-3 shadow-lg bg-white shadow-xl rounded-lg px-3 py-3'>
      <button
      onClick={() =>setColor("maroon")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"maroon"}}
      >Maroon</button>
      <button 
      onClick={() =>setColor("Green")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"Green"}}
      >Green</button>
      <button
      onClick={() =>setColor("orange")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"orange"}}
      >Orange</button>
      <button 
      onClick={() =>setColor("Purple")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"Purple"}}
      >Purple</button>
      <button
      onClick={() =>setColor("Indigo")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"Indigo"}}
      >Indigo</button>
      <button 
        onClick={() =>setColor("magenta")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"magenta"}}
      >Magenta</button>
      <button
        onClick={() =>setColor("blue")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"blue"}}
      >Blue</button>
      <button
        onClick={() =>setColor("pink")}
      className='outline-none px-4 py-2 rounded-lg text-white font-semibold'
      style={{backgroundColor:"Pink"}}
      >Pink</button>

    </div>

  </div>
  </div> 

</>
)
}

export default App
