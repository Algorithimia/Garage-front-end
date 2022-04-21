import React, { useState, useEffect } from 'react'

import { Link, Route, Routes } from 'react-router-dom'

import MintenancePackagingBody from './MintenancePackagingBody'
import AddEditePackage from './AddEditePackage'
import { useDispatch,useSelector } from 'react-redux'
import {getPackages, clearstate} from '../../store/store slices/packagesSlice'
import EditePackage from './EditePackage'

const MaintenancePackaging = () => {
    const dispatch = useDispatch()
    const {packages, created,updated, isLoading, error} = useSelector((state)=>state.packages)
    const [showAlert, setShowAlert]= useState(true)

  
     
    return (
        <>
         {
          
        <div className='mintenance'>
              <div className='header'>
              MAINTENANCE PACKAGING
            <span className='right'>
                YOUR SUBSCRIPTION ENDS IN 15 DAYS
               <Link to='/workshop/owner/subscribtion'><span className='under_line'>UPGRADE</span></Link> 
                
            </span>
 
           </div>
           {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }
            {showAlert && created && <div className='create-msg'> You Create a package </div> }
            {showAlert && updated && <div className='edite-msg'> Edited successfully </div> }
           <Routes>
              <Route path="/" element={<MintenancePackagingBody/>} exact  />
              <Route path="/add" element={<AddEditePackage/>} exact  />
              <Route path="/edite" element={<EditePackage/>} exact  />
           </Routes>
  

            
        </div>
         }
          </>
    )
}

export default MaintenancePackaging
