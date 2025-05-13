import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const handleCounter = () => {
    setCount(count + 1)    
  }

  const randomNumber = useMemo(()=> Math.random() *1000,[])  
  const randomNumberFnc = useCallback(()=> Math.random() *1000,[])  
  console.log('RandomNumber:', randomNumber);
  console.log('RandomNumberFnc:', randomNumberFnc);
  

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-10'>
      <button onClick={handleCounter} className='px-10 py-3 rounded-xl bg-indigo-600 text-white cursor-pointer'>{count}</button>
      <button onClick={handleCounter} className='px-10 py-3 rounded-xl bg-indigo-600 text-white cursor-pointer'>Counter</button>
    </div>

    </>
  )
}

export default App
