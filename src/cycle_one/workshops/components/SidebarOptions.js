import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const SidebarOptions = () => {
    const [showSettings,setShowSettings]= useState(false)
    return (
        <div className='sidebar_options sidebar'>
             <div className='link'>
                   <Link to='/workshop/owner/vheiclesview'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-car-alt.svg' />
                    <span className='text_link'>VEHICLES</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/allworkorders'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 9.svg' />
                    <span className='text_link'>WORK ORDERS</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/garagecustomers'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-users.svg' />
                    <span className='text_link'>CUSTOMERS</span>
                    </Link>
                </div>
              

                <div className='link'>
                   <Link to='/workshop/owner/manageinventory'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-tools.svg' />
                    <span className='text_link'>INVENTORY</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/employes'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon awesome-users-cog.svg' />
                    <span className='text_link'>EMPLOYEES</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/businesses'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 11.svg' />
                    <span className='text_link'>BUSSINESSES</span>
                    </Link>
                </div>

              

                <div className='link'>
                   <Link to='/workshop/owner/gragefinance'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 7.svg' />
                    <span className='text_link'>FINANCE</span>
                    </Link>
                </div>


                <div className='link'>
                   <Link to='/workshop/owner/calender'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-time.svg' />
                    <span className='text_link'>APPOINTMENT</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/marketing'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 26.svg' />
                    <span className='text_link'>MARKETING</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop/owner/assets'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Group 636.svg' />
                    <span className='text_link'>ASSETS</span>
                    </Link>
                </div>
                  
                <div className='link pointer' onClick={()=>{setShowSettings(!showSettings)}}>
                   {/* <Link to='/workshop/owner/settings'> */}
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-settings.svg' />
                    <span className='text_link'>SETTING</span>
                    {/* </Link> */}
                   { showSettings &&
                     <div className='settings'>
                        <Link to='/workshop/owner/settings'>
                                <div className='option'> Prefrence Settings </div>  
                        </Link>
                        <Link to='/workshop/owner/subscribtion'>
                           <div className='option'> Subscribtion Plan </div>
                        </Link>
                        <Link to='/workshop/owner/maintnance'>
                        <div className='option'> Mintenance Packaging </div>
                        </Link>
                        <div className='option log_out'> Logout </div>


                    </div>}
                </div>
            
        </div>
    )
}

export default SidebarOptions
