import React, { useEffect } from "react"
import {RiTimer2Fill} from "react-icons/ri"
import {GiSandsOfTime} from "react-icons/gi"
import {BsCheckCircleFill} from "react-icons/bs"
import {MdPayment} from "react-icons/md"
import {FaSearch} from "react-icons/fa"
import {RiCarFill} from "react-icons/ri"
import {AiFillPlusCircle} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {RiFileCopy2Fill} from "react-icons/ri"
import {FiLogOut} from "react-icons/fi"
import { Row,Col } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import moment from 'moment'
import BoxInfo from "../workshops/BoxInfo"
import IconBox from "../workshops/IconBox"

import CustomerInList from "../workshops/CustomerInList"
import Appointment from "../workshops/Appointment"
import {logOut} from '../../store/store slices/auth'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
import {geAppointments} from '../../store/store slices/appointmentSlice'
import {getcustommers} from '../../store/store slices/workshopCustommerSlice'
import { useDispatch,useSelector } from 'react-redux'
const EmployDashbord = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {workorders,isLoading}= useSelector((state)=>state.workOrders)
    const { appointmentsList} = useSelector((state)=>state.appointment)
    //customers data 
    const custommerState= useSelector((state)=>state.customers)
    const {custommers}= useSelector((state)=>state.customers)
    const custommersLoading = custommerState.isLoading
    
    
    // dates 
    const appointmentState =  useSelector((state)=>state.appointment)
    const appointmentLoading = appointmentState.isLoading
    let realDates=appointmentsList.filter(a=>moment(a.start_at)  >= new Date())
    let commingAppointment = realDates[realDates.length-1]

    //logout
    const userlogout=()=>{
        dispatch(logOut());
        navigate('/login_process/owner_login')
    }
    //end logout
    //inprogress orders
    let inWorkordersLenth=isLoading?'Loading..' :workorders.length

    //rendered customers
    let firstThreeCusstommers=custommers.slice(0, 3);
    const renderedcustomers = custommersLoading ? <div>Loading ..</div> :firstThreeCusstommers.map((customer)=> <CustomerInList key={customer.id} name={customer.name} id={customer.id} addBy="Employee name"  />)
     
    // get data
    useEffect(() =>{
        dispatch(getWorkOrders());
        dispatch(geAppointments());
        dispatch(getcustommers());
      },[dispatch])
    return (
        <>
        
          
            <div className="grage_owner_dashbord">
            <Row>
                  <Col sm={12}>
                  <div className="right logout">
                      <span onClick={()=>userlogout()}><span className="icon"><FiLogOut /></span>logout</span>
                    
                  </div>
                  </Col>
               
                 
                      <Col  md={12} lg={9} className="width">
                          
                         <Row className="secoond_row">
                             {/*start  employ info  */}
                             <Col md={12} lg={6}>
                             <Row className="justify-md-lg-center">
                            <Col  md={6}>
                                <div className="employ-boxinfo">
                                   <BoxInfo icon={<RiTimer2Fill />} title='WORK HOURS' number='120' view={false} bacGroundColor="#71A43F" path='/workshop/owner/allworkorders'/>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="employ-boxinfo">
                                    <BoxInfo icon={<GiSandsOfTime />} title='In WORK ORDERS' view={false} number={inWorkordersLenth} bacGroundColor="#F2A911" path='/workshop/owner/allworkorders'/>
                                </div>
                            </Col>
                             {/*end  employ info  */}
                         </Row> 
                                <div className="tools_image">
                               <img  src='/images/cycle one/Group 24.svg' />
                               </div> 
                                 {/*start  comming appointment  */}
                               <Appointment  appointment={commingAppointment} loading={appointmentLoading}/>
                                {/*end  comming appointment  */}
                             </Col>
                               {/*start  comming quick process  */}
                             <Col md={12} lg={6}>
                                 <div className="title">QUICK PROCESSES</div>
                                 <Row className="icon_row">
                                     <Col>
                                        <Link to='/workshop/owner/allworkorders/'>
                                             <IconBox color='#BF054BCF' icon={<FaSearch />} text='search work orders'/>
                                       </Link>
                                     </Col>
                                     <Col>
                                       <Link to='/workshop/owner/createworkeorder'>
                                            <IconBox color='#BF054BCF' icon={  <> <AiFillPlusCircle  />
                                                    <RiFileCopy2Fill/> </>} text='add work order'/>
                                        </Link>     
                                     </Col>
                                 </Row>
                                 <Row className="icon_row">
                                     <Col>
                                       <Link to='/workshop/owner/garagecustomers'>
                                             <IconBox color='#71A43F' icon={<FaSearch />} text='search customers'/>
                                       </Link>
                                     </Col>
                                     <Col>
                                       <Link to='/workshop/owner/createoreditecustomer'>
                                        <IconBox color='#71A43F' icon={  <> <AiFillPlusCircle />
                                            <FaUsers /> </>}  text='add customer'/>
                                       </Link>
                                     </Col>
                                 </Row>
                                
                                 <Row className="icon_row">
                                     <Col>
                                       <Link to='/workshop/owner/vheiclesview'>
                                            <IconBox color='#F2A911' icon={<FaSearch />}text='search vehicles'/>
                                       </Link>
                                     </Col>
                                     
                                     <Col>
                                       <Link to='/workshop/owner/addvehicle2'> 
                                            <IconBox color='#F2A911' icon={  <> <AiFillPlusCircle  />
                                            <RiCarFill /> </>} text='add vehicle'/>
                                        </Link>
                                     </Col>
                                 </Row>
                                 <Row className="icon_row">
                                     <Col sm={6}>
                                        <Link to='/workshop/owner/businesses'>
                                            <IconBox color='#152F55' icon={<FaSearch />} text='search Businesses'/>
                                       </Link>
                                     </Col>
                                   
                                 </Row>


                             </Col>

                              {/* end  comming quick process  */}
                         </Row>
                      </Col>
                       {/*start  custommers  */}
                      <Col sm={12} lg={3}>
                    
                        <div className="employes employ-customers">
                            <div className="title  margin_top">RECENT CUSTOMERS</div>
                           { renderedcustomers}
                             <Link to='/workshop/owner/garagecustomers'>SEE ALL</Link>
                        </div>
                         {/*end  custommers  */}

                      </Col>
                  
                
                  </Row>
            </div>
        
        
            
        </>
    )
}


export default EmployDashbord