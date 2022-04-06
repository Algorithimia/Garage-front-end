import React , {useEffect, useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import{getUserDetails} from '../../store/store slices/detailUser'
import {logOut} from '../../store/store slices/auth'
const SideBar = ({settings}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userDetails , isLoading ,error}= useSelector((state)=>state.userDetails)
    const [showSettings,setShowSettings]= useState(false)
    const[workshop_id,SetWorkshop_id]= useState('')
    useEffect(()=>{
        setShowSettings(settings)
    },[settings])

    useEffect(() =>{
        dispatch(getUserDetails());
       
    
      },[dispatch])
    let renderedWorkshops =userDetails.workshops && userDetails.workshops.map((workshop)=>{return <div key={workshop.id }>
    <Dropdown.Item ><img className='dropdown_img drop_imgg ' src={workshop.image} /> &nbsp;{workshop.title}</Dropdown.Item></div>} )
        
        //(workshop)=><option key={workshop.id} value={workshop.id}><img className='dropdown_img' src={workshop.image} />{workshop.title}</option>)
    const onChange=e=>SetWorkshop_id(e.target.value)
    const userlogout=()=>{
        dispatch(logOut());
        navigate('/login_process/owner_login')
    }
  
    return (
        <>
            <div className='sidebar'> 
            {!userDetails || isLoading ? <div>loading ..</div>:
            <div>
                <Link to={ userDetails.is_garage_owner ? '/workshop/owner/dashbord' :'/employ/'}>
                       <img className='logo' src='/images/cycle one/GarageWorkLogo.png' />
                </Link>
                <br />
             
                        {/* <select  name='workshop_id' value={workshop_id} onChange={e=>onChange(e)} required> */}
                            {/* <option hidden >choose a Workshop</option> */}
                            {/* {renderedWorkshops} */}
                        {/* </select> */}
                        
                  
                <Dropdown>
                    <img className='dropdown_img' src='/images/cycle one/workshop.jpg' />
                    <Dropdown.Toggle  className='dropdown' >
                  
                    Workshop Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu onSelect={eventKey=> console.log(eventKey)}>
                    {renderedWorkshops}
                      
                       <div className='add'>
                        <Dropdown.Item ><Link to='/workshop/owner/addworkshop'><span><AiFillPlusCircle /></span> Add New</Link></Dropdown.Item>
                            
                       </div>
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
                   <Link to={userDetails.is_garage_owner ? '/workshop/owner/allworkorders' : '/employ/workorders'}>
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
                   <Link to='/workshop/owner/marketing'>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Mask Group 26.svg' />
                    <span className='text_link'>MARKETING</span>
                    </Link>
                </div>

                <div className='link'>
                   <Link to={userDetails.is_garage_owner ? '/workshop/owner/assets' : '/employ/assets'}>
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Group 636.svg' />
                    <span className='text_link'>ASSETS</span>
                    </Link>
                </div>
                <div className='line'></div>   
                {userDetails.is_garage_owner &&  
                <div className='link pointer' onClick={()=>{setShowSettings(!showSettings)}}>
                   {/* <Link to='/workshop/owner/settings'> */}
                    <img className='img_link' src='/images/cycle one/sidebar_icons/Icon ionic-ios-settings.svg' />
                       <span id='side_settings'  className='text_link'>SETTING</span>
                    {/* </Link> */}
                   {showSettings &&
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
                        <div className='option log_out' onClick={()=>userlogout()}> Logout </div>


                    </div>}
                    
                </div>}
                 <Link to='/employ/employinfo'>
                 {userDetails.is_employeer &&  <div className='employ'>
                        <img 
                         src='https://img.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg?t=st=1647439511~exp=1647440111~hmac=64d56b276703ad976c85aec5abd0016352eb27ce7d3732b6008da55960fef105&w=996'
                            /> 
                            Employ Name

                    </div>
                   }
                </Link>
             


               </div>}
            </div>
        </>
    )
}

export default SideBar
