import React, { useEffect, useState } from 'react'
import Header from './Header'
import RestCard from './RestCard'
import useFoodRest from '../hooks/useFoodRest'
import Shimmer from './Shimmer'

const PopularFood = () => {
    const [allRestaurants, setAllRestaurants] = useState([])

    const getFoodRestaurants = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
              // initialize checkData for Swiggy Restaurant data
              let checkData =
                json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
        }
    
          // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = checkJsonData(json);

        // console.log(resData)

        setAllRestaurants(resData)
    }

    useEffect(()=> {
        getFoodRestaurants()
    },[])


    console.log(typeof allRestaurants)

  return (
    <>
        {
            allRestaurants?.length === 0 ? 
            (
             <div>
                <Header heading="Popular Food"/>
                <Shimmer/>
             </div>    
            
            ):(
                <div className='m-auto w-full py-6 px-24  '>
                    <Header heading="Popular Food"/>
                        <div className='flex py-12 gap-5 w-full flex-wrap justify-between gap-y-4'>
                         {
                            allRestaurants.map((rest) => {
                                return <RestCard data={rest?.info}/>
                            })
                         }
                    </div>
                </div>  
            )
        }
    </>
  )
}



export default PopularFood