import React from 'react'
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"
import{FaCar, FaTools} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const YourVehicles = () => {
  return (
    <div className='box bigger'>
        <div className='title'>Your Vehicles</div>
        <div className='body'>
           <div className='box-row'> 
               <span className='icon'> <FaCar /></span> &nbsp;
               <span>CAR NAME</span> &nbsp;
               <span>BMW</span>
               <span className='oposite'>
                   <span>
                       <MdDeleteSweep />
                   </span>
                   <span className='tools'>
                       <FaTools />
                   </span>
                   <span className='edite'>
                        <RiEditLine />
                   </span>

               </span>
           </div>
           <div className='box-row'> 
               <span className='icon'> <FaCar /></span> &nbsp;
               <span>CAR NAME</span> &nbsp;
               <span>BMW</span>
               <span className='oposite'>
                   <span>
                       <MdDeleteSweep />
                   </span>
                   <span className='tools'>
                       <FaTools />
                   </span>
                   <span className='edite'>
                        <RiEditLine />
                   </span>

               </span>
           </div>
           <Link to='/vehicleowmer'>SEE ALL</Link>
        </div>
        
    </div>
  )
}

export default YourVehicles