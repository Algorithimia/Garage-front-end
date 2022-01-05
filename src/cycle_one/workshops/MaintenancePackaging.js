import React from 'react'

import { Link, Route, Routes } from 'react-router-dom'

import MintenancePackagingBody from './MintenancePackagingBody'
import AddEditePackage from './AddEditePackage'
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
           <Routes>
              <Route path="/" element={<MintenancePackagingBody/>} exact  />
              <Route path="/add" element={<AddEditePackage/>} exact  />
           </Routes>
  

            
        </div>
    )
}

export default MaintenancePackaging
