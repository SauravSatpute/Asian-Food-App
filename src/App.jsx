import { useState } from 'react'
import Hero from './components/Hero'
import OrderInstruction from './components/OrderInstruction'
import Navbar from './components/Navbar'
import PopularFood from './components/PopularFood'
import Shimmer from './components/Shimmer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <OrderInstruction/>
      <PopularFood/>
    </>
  )
}

export default App
