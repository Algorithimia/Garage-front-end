import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <div className='sidebar'> 
                <img className='logo' src='/images/cycle one/GarageWorkLogo.png' />
                <br />
              
                <Dropdown>
                    <img className='dropdown_img' src='/images/cycle one/workshop.jpg' />
                    <Dropdown.Toggle  className='dropdown' >
                    Workshop Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><img className='dropdown_img' src='/images/cycle one/workshop.jpg' /> &nbsp;Workshop Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><img className='dropdown_img' src='/images/cycle one/workshop.jpg' /> &nbsp;Workshop Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><img className='dropdown_img' src='/images/cycle one/workshop.jpg' /> &nbsp; Workshop Name</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                <div className='line'></div>
                
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
                <div className='line'></div>

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

                <div className='line'></div>

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
                   <Link to='/workshop'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 26.svg' />
                    <span className='text_link'>MARKETING</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to='/workshop'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Group 636.svg' />
                    <span className='text_link'>ASSETS</span>
                    </Link>
                </div>
                <div className='line'></div>    
                <div className='link'>
                   <Link to='/workshop'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-settings.svg' />
                    <span className='text_link'>SETTING</span>
                    </Link>
                </div>
             



            </div>
        </>
    )
}

export default SideBar
