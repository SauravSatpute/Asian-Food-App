import { useState } from 'react'
import Hero from './components/Hero'
import OrderInstruction from './components/OrderInstruction'
import Navbar from './components/Navbar'
import PopularFood from './components/PopularFood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <OrderInstruction/>
      <PopularFood/>
      {/* <h1 className='text-center'>Hello World</h1> */}
    </>
  )
}

export default App
