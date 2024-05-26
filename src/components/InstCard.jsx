import React from 'react'

const InstCard = (props) => {

    const {imgURL} = props.src;
    console.log(props.src)
    // console.log(imgURL)

  return (
    
        <div className=" gap-3 max-w-72  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=''>
                <a href="#">
                    <img className="mx-auto rounded-t-lg" src={props.src} style={{width:200}} alt="" />
                </a>
            </div>
            <div className="p-5">
                <h1 className='py-3 text-xl'>{props.inst}</h1>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                
            </div>
        </div>
    
  )
}

export default InstCard