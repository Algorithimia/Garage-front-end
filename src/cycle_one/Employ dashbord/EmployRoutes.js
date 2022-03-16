import React ,{useState} from 'react'

import { Route, Routes} from 'react-router-dom'
import EmployDashbord from './EmployDashbord'
import SideBar from '../workshops/SideBar'
import SidebarOptions from '../workshops/components/SidebarOptions'
import {BsList} from 'react-icons/bs'
const EmployRoutes = () => {
    const[showside,setShowSide]=useState(false)
    const[settings,setSetting]=useState()
  
    return (
        <div className='workshop-background' onClick={(e)=>
       { if(e.target !== document.getElementById('option')   ){
       if(e.target !== document.getElementById('settings_target') ){
       setShowSide(false)
      
      
       
           } 
           if(e.target !== document.getElementById('side_settings') ){
            setSetting(false)
           
           
            
                } 
                if(e.target == document.getElementById('side_settings') ){
                    setSetting(true)
                   
                   
                    
                        } 
            
           
        }

        //   side_settings  if(e.target == document.getElementById('settings') ){
        //     setShowSide(true)
        //     console.log('hi')
           
    
        //    }
        //    if(e.target == document.getElementById('show') ){
        //     setSetting(true)
        //     console.log(settings)
    
        //    }
    }
        }>
         
                <div className='inline-block'>
                    <SideBar settings={settings} />
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
                    <Route path="/" element={<EmployDashbord />} exact  />  
                </Routes>
                </div>
            
        </div>
    )
}

export default EmployRoutes