import React,{ useEffect, useState } from 'react'

const RestCard = (props) => {

    const { cloudinaryImageId, name, cuisines,areaName, sla, costForTwo, avgRatingString, } = props.data

    const [bgRatingColor, setBgRatingColor] = useState("") 

    console.log(sla)

   const checkRating = () => {
        // console.log((avgRatingString))
        if(Number(avgRatingString) > 4) {
            setBgRatingColor("#32A431")
        }
        else {
            setBgRatingColor("#FF0000")
        }
   }

   useEffect(()=> {
    checkRating();
   },[])

   

  return (

    <div>
        <div className="object-cover object-center p-4 w-72 min-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-[#E5AF10] hover:text-white transition-all">
            <div className=''>
                <a href="#">
                    <img className="mx-auto rounded-t-lg" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} style={{width:200}} alt="" />
                </a>
                {/* <h1>Hello</h1> */}
            </div>
            <div className="p-3">
                <h1 className='py-3 text-sm font-medium'>{name}</h1>
                <p className="text-sm mb-3 font-normal dark:text-gray-400">{cuisines.join(", ")}</p>
                <div className='flex justify-between items-center'>
                    <h2 className='px-2 py-1 rounded-lg text-white' style={{backgroundColor:bgRatingColor}}> ⭐ {avgRatingString}</h2>
                    <h2>• {costForTwo ?? '₹200 for two'}</h2>
                </div>
                <div className='text-center my-3'>
                    <h2>{sla.lastMileTravelString}</h2>
                </div>
            </div>
        </div>

        
    </div>
  )
}

{/* <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5> */}

export default RestCard