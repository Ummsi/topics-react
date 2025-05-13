import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import Card from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Ummsi",
    age: 25,
    location: "USA"
  }

  let myArray = [
  [ "Ummsi", "Code", "React", "Tailwind" ],
  ]

  

  return (
    <>
    <div>
      <h1 className='bg-green-500 rounded-2xl p-4 text-5xl text-white'>Tailwind Test</h1>
    <Card userName={"Ummsi&Code"} someObj={myObj} newArr={myArray} btnText="Click Me"/>
    <Card userName={"Ummsi&Code"} someObj={myObj} newArr={myArray} btnText="Read Me"/>
  </div>
{/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl  bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div class="flex items-center md:items-start gap-5 ">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500 gap-5">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span> No. 4</span>
      <span> ·</span>
      <span> 2025</span>
    </span>
    
  </div>
</div> */}
    </>
  )
}

export default App
