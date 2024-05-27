import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {
    const arr = [1,2,3,4]
  return (
    <div className='m-auto w-full py-6 px-24 flex flex-wrap gap-y-6 item-center justify-between '>
        {
            arr.map(()=> {
                return (
                    <ShimmerCard/>
                )
            })
        }
    </div>

  )
}

export default Shimmer