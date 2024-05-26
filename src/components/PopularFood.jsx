import React from 'react'
import Header from './Header'
import RestCard from './RestCard'

const PopularFood = () => {
  return (
    <div className='m-auto w-full py-6 px-24 text-center text-3xl '>
        <Header heading="Popular Food"/>
        <div>
            <RestCard/>
        </div>
    </div>
  )
}

export default PopularFood