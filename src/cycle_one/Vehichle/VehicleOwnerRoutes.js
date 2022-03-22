import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashbord from './Dashbord/Dashbord'
import Sidebar from './Sidebar'
import SidebarOptions from '../workshops/components/SidebarOptions'
import {BsList} from 'react-icons/bs' 
import YourVehicle from './yourVehicles/YourVehicle'
const VehicleOwnerRoutes = () => {
    const[showside,setShowSide]=useState(false)
  
  return (
    <div  className='workshop-background' onClick={(e)=>
            { if(e.target !== document.getElementById('option')){
                if(e.target !== document.getElementById('settings_target') ){
                setShowSide(false)
            
            
                
                    } }}} >

                   <div className='inline-block'>
                    <Sidebar employ={true}/>
                            </div>
                    
                            <div className='inline-block page'>
                                <div id='option' className='show_sidebar'
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setShowSide(!showside)
                                
                                }
                                    
                                }>
                                    <BsList />  options
                        </div>
                        {showside && <SidebarOptions />}  
        <Routes>
              <Route path="/" element={<Dashbord />} exact />
              <Route path="/yourvehicles" element={<YourVehicle />} exact />
        </Routes>
    </div>
    </div>
  )
}

export default VehicleOwnerRoutes