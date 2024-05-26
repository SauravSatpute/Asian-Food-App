import React from 'react'
import InstCard from './InstCard'
import SelectFood from '../assets/SelectFood.png'
import Customization from '../assets/Customization.png'
import Placement from '../assets/Placement.png'
import Pickup from '../assets/Pickup.png'
import Header from './Header'

const OrderInstruction = () => {

const instCardsInfo = [
    {
        src : SelectFood,
        inst : "SelectFood",
        desc : "selecting the type of food you want to order"
    },
    {
        src : Customization,
        inst : "Customization",
        desc : "specify additional ingredients, modifications, or any specific preferences you may have"
    },
    {
        src : Placement,
        inst : "Placement",
        desc : "you can either order online by adding items to your virtual cart and providing your contact"
    },
    {
        src : Pickup,
        inst : " Delivery/Pickup",
        desc : "You will typically receive a confirmation message or email that includes the details of your order, such as the estimated delivery or pickup time. "
    },
]


  return (
    <div>
        <div className='m-auto w-full py-6 px-24 text-center text-3xl my-12'>
            
            <Header heading="How You Can Order"/>
            <div className='flex justify-between py-6'>
                {
                    instCardsInfo.map((item)=> {
                        return <InstCard src={item.src} inst={item.inst} desc={item.desc}/>
                    })
                }
                
            </div>  
        </div>
    </div>
  )
}

export default OrderInstruction