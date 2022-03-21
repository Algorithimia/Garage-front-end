import React from 'react'
import{FaCar, FaTools} from 'react-icons/fa'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const PROFILE = () => {
  return (
    <div className='box bigger profile'>
    <div className='title'>PROFILE</div>
    <div className='body'>
        <img src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1647862471~exp=1647863071~hmac=43a6f0207c7a0943ce255a93cd53faefb15dfc19fb5bc1330e4d1eae3ec5e500&w=996' />
       <div className='box-row'> 
           <span className='icon'>  <FaCar /> </span> &nbsp;
           <span>2   Cars </span>
        
       </div>
       <div className='box-row'> 
           <span className='icon'>  <FaTools /> </span> &nbsp;
           <span>11   WORKORDERS </span>
        
       </div>
    
       
    </div>
    <Link to='/vehicleowmer'>
    
           EDIT

    </Link>
    
</div>
    

  )
}

export default PROFILE