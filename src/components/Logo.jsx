import React from 'react'
import LogoImg from '../assets/Asianfood.png'

const Logo = (props) => {


  return (
    <>
        <div className="">
            <a href="#"><img width={props.width} src={LogoImg} alt="Asian Food" /></a>
        </div>
    </>
  )
}

export default Logo