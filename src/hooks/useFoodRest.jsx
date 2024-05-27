import React, { useEffect } from 'react'

const useFoodRest = () => {
  
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

        return resData;
    }

    useEffect(()=> {
        getFoodRestaurants()
    },[])
}

export default useFoodRest