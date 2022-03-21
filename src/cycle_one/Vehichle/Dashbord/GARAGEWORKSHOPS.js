import React from 'react'
import {AiTwotoneHeart,AiOutlineHeart} from 'react-icons/ai'
import{FaCar, FaTools} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const GARAGEWORKSHOPS = () => {
  return (
    <div className='box bigger'>
        <div className='title'>GARAGE WORKSHOPS</div>
        <div className='body'>
           <div className='box-row'> 
               <span className='icon'>  <FaTools /> </span> &nbsp;
               <span>WORKSHOP NAME</span> &nbsp;
            
               <span className='oposite'>
                   <icon>
                       <AiTwotoneHeart />
                   </icon>
               </span>
           </div>
           <div className='box-row'> 
               <span className='icon'>  <FaTools /> </span> &nbsp;
               <span>WORKSHOP NAME</span> &nbsp;
            
               <span className='oposite'>
                   <icon>
                       <AiTwotoneHeart />
                   </icon>
               </span>
           </div>
          
           <Link to='/vehicleowmer'>SEE ALL</Link>
        </div>
        
    </div>
  )
}

export default GARAGEWORKSHOPS