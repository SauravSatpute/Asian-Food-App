import React from 'react'
import HeroImg from '../assets/Allustration.png'
import cart from '../assets/shopping_cart.png'


const Hero = () => {
    return (
        <div className='w-full m-auto py-6 px-24 flex items-center justify-around'>
            <div>
                <img width={500} src={HeroImg} alt="" />
            </div>
            <div className='w-1/3'>
                <div>
                <h1 className=' text-4xl font-bold py-6'>Happy with <span style={{color:"#E5AF10"}}>Delicious Food</span> and get new experiences with asian food</h1>
                </div>
                <p py-6>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p>
                
                <div className='flex py-6'>
                    <button style={{backgroundColor:"#E5AF10"}} className='flex gap-1 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    >Order Food <img src={cart} alt="" /></button>
                    <button style={{backgroundColor:"#fff"}} className='flex gap-1 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-[#E5AF10] hover:bg-gray-100 hover:text-[#E5AF10] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    >Learn More</button>

                </div>
                
                
            </div>
        </div>
    )
}

export default Hero