import React , {useEffect, useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {AiFillPlusCircle} from 'react-icons/ai'


const Sidebar = ({settings,golink='/workshop/owner/dashbord'}) => {
    const [showSettings,setShowSettings]= useState(false)

    useEffect(()=>{
        setShowSettings(settings)
    },[settings])
    return (
        <>
            <div className='sidebar'> 
                <Link to={golink}>
                       <img className='small-logo' src='/images/cycle one/Mask Group 3.png' />
                       <img className='big-logo' src='/images/cycle one/vGarageWorkLogo.png' />
                </Link>
                <br />
                <div className='line'></div>

                <div className='link'>
                   <Link to='/workshop/owner/allworkorders'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 9.svg' />
                    <span className='text_link'>Work Order</span>
                    </Link>
                </div>

                
                <div className='link'>
                   <Link to='/workshop/owner/vheiclesview'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-car-alt.svg' />
                    <span className='text_link'>Your Vehicles</span>
                    </Link>
                </div>

             
                <div className='link'>
                   <Link to='/workshop/owner/manageinventory'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-tools.svg' />
                    <span className='text_link'>Garages</span>
                    </Link>
                </div>
                <div className='line'></div>

               

                <div className='link'>
                   <Link to='/workshop/owner/employes'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-users-cog.svg' />
                    <span className='text_link'>Payment History</span>
                    </Link>
                </div>

              

                <div className='line'></div>

               

                <div className='link'>
                   <Link to='/workshop/owner/calender'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-time.svg' />
                    <span className='text_link'>APPOINTMENT</span>
                    </Link>
                </div>
                <div className='link'>
                   <Link to='/workshop/owner/calender'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-table.svg' />
                    <span className='text_link'>Maintenance Recommendations</span>
                    </Link>
                </div>

             
                
             
                <div className='line'></div>    
                <div className='link'>
                   <Link to='/workshop/owner/calender'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon feather-package.svg' />
                    <span className='text_link'>Maintenance Packaging</span>
                    </Link>
                </div>

             
                <div className='line'></div>  
                <div className='link pointer' onClick={()=>{setShowSettings(!showSettings)}}>
                   {/* <Link to='/workshop/owner/settings'> */}
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-settings.svg' />
                    <span id='side_settings'  className='text_link'>SETTING</span>
                    {/* </Link> */}
                   {showSettings &&
                     <div className='settings'>
                        <Link to='/workshop/owner/settings'>
                                <div className='option'> Profile </div>  
                        </Link>
                       
                        <div className='option log_out'> Logout </div>


                    </div>}
                    
                </div>
             



            </div>
        </>
    )
}

export default Sidebar
