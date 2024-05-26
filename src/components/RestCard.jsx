import React from 'react'

const RestCard = () => {
  return (
    <div>
        <div className=" gap-3 max-w-72  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=''>
                <a href="#">
                    {/* <img className="mx-auto rounded-t-lg" src={} style={{width:200}} alt="" /> */}
                </a>
            </div>
            <div className="p-5">
                <h1 className='py-3 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam fuga atque autem.</h1>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi mollitia officiis amet rem, veniam asperiores voluptatum eaque dolor, fugiat et fuga hic labore maiores animi totam ut? Neque omnis sit corporis.</p>
                
            </div>
        </div>
    </div>
  )
}

export default RestCard