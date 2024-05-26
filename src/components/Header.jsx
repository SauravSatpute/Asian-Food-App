import React from 'react'

const Header = (props) => {
  return (
    <div className='text-center text-3xl '>
        <h1>{props.heading}</h1>
        <div className='m-auto w-48 h-1 my-3' style={{backgroundColor:"#E5AF10"}} ></div>
    </div>
  )
}

export default Header