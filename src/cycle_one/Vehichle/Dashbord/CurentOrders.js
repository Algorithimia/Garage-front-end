import React from 'react'
import{FaCar, FaTools} from 'react-icons/fa'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const CurentOrders = () => {
  return (
    <div className='box bigger'>
    <div className='title'>CURRENT WORK ORDERS</div>
    <div className='body'>
       <div className='box-row'> 
           <span className='icon'>  <FaCar /> </span> &nbsp;
           <span> Car  &nbsp; BMW  &nbsp; A7 &nbsp;Fuel 6%  &nbsp; GARAGE NAME </span>
        
       </div>
    
       
    </div>
    <div className='order-status'>
           <span> <BsFillCheckCircleFill /> </span>  Completed
       </div>
    
</div>
    

  )
}

export default CurentOrders