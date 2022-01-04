import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MaintenancePackaging = () => {
    return (
        <div className='mintenance'>
              <div className='header'>
              MAINTENANCE PACKAGING
            <span className='right'>
                YOUR SUBSCRIPTION ENDS IN 15 DAYS
               <Link to='/workshop/owner/subscribtion'><span className='under_line'>UPGRADE</span></Link> 
                
            </span>
 
           </div>
           <div className='body'>
               <Link to='/'><button><span><AiFillPlusCircle /> Add New Package</span></button></Link>

           </div>

            
        </div>
    )
}

export default MaintenancePackaging
