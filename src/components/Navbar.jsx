import React from 'react'
import Logo from './Logo'
import cart from '../assets/shopping_cart.png'

const Navbar = () => {
  return (
    <div>
        <div className="m-auto w-full py-6 px-24 flex item-center justify-between">
            <div>
             <Logo width="200px" />
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className='flex items-center justify-around gap-5'>
                <div>
                <a href="#"><img src={cart} alt="" /></a>
                </div>
                <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar