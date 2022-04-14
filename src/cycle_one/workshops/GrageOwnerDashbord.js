import { useEffect } from "react"
import {RiTimer2Fill} from "react-icons/ri"
import {GiSandsOfTime} from "react-icons/gi"
import {BsCheckCircleFill} from "react-icons/bs"
import {MdPayment} from "react-icons/md"
import {FaSearch} from "react-icons/fa"
import {RiCarFill} from "react-icons/ri"
import {AiFillPlusCircle} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {RiFileCopy2Fill} from "react-icons/ri"
import moment from 'moment'
import { Row,Col } from "react-bootstrap"
import {Link} from "react-router-dom"

import BoxInfo from "./BoxInfo"
import IconBox from "./IconBox"
import EmployInList from "./EmployInList"
import CustomerInList from "./CustomerInList"
import Appointment from "./Appointment"
import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
import {getemploys} from '../../store/store slices/GOEmploy'
import {geAppointments} from '../../store/store slices/appointmentSlice'
const GrageOwnerDashbord = () => {
    const dispatch = useDispatch()
    const {workorders,isLoading}= useSelector((state)=>state.workOrders)
    const {employs} = useSelector((state)=>state.GoEmploye)
    const { appointmentsList} = useSelector((state)=>state.appointment)
    let employState= useSelector((state)=>state.GoEmploye)
    let employLoading =employState.isLoading
    const appointmentState=  useSelector((state)=>state.appointment)
    // dates 
    const appointmentLoading = appointmentState.isLoading
    let realDates=appointmentsList.filter(a=>moment(a.start_at)  >= new Date())
    let commingAppointment = realDates[realDates.length-1]
    useEffect(() =>{
        dispatch(getWorkOrders());
        dispatch(getemploys());
        dispatch(geAppointments());
      },[dispatch])
      let createdWorkordersLenth=isLoading?'Loading..' :workorders.length
      let inProgressWorkordersLenth=isLoading?'Loading..' :workorders.filter(workOrder => workOrder.status == "In Progress").length
      let completedWorkordersLenth=isLoading?'Loading..' :workorders.filter(workOrder => workOrder.status == "Completed").length
      let firstThreeEmployees=employs.slice(0, 3);
      let renderedEmployees=employLoading ? <div> Loading ...</div>:firstThreeEmployees.map((employ)=> <EmployInList key={employ.id} employ={employ}/>)
      console.log(firstThreeEmployees)
     
    return (
        <>
        
          
            <div className="grage_owner_dashbord">
            <Row>
                  <Col sm={12}>
                  <div className="right">
                      <span>Your Free Trail Will Expire in 7 Days</span>
                     <Link to='/workshop/owner/subscribtion'> <span className="blue">ACTIVATE NOW</span> </Link>
                  </div>
                  </Col>
               
                 
                      <Col  md={12} lg={9} className="width">
                          <Row className="justify-md-lg-center">
                            <Col md={3} sm={6}>
                                <BoxInfo icon={<RiTimer2Fill />} title='Created' number={createdWorkordersLenth} bacGroundColor="#71A43F" path='/workshop/owner/allworkorders'/>
                            </Col>
                            <Col md={3} sm={6}>
                                <BoxInfo icon={<GiSandsOfTime />} title='In Progress' number={inProgressWorkordersLenth} bacGroundColor="#F2A911" path='/workshop/owner/allworkorders'/>
                            </Col>
                            <Col md={3} sm={6}>
                                <BoxInfo icon={<BsCheckCircleFill />} title='Completed' number={completedWorkordersLenth} bacGroundColor="#4094EB" path='/workshop/owner/allworkorders'/>
                            </Col>
                            <Col md={3} sm={6}>
                                <BoxInfo md={<lgPayment />} title='Payment Due' number='120 $' bacGroundColor="#51459D" path='/workshop/owner/alloverdue'/>
                            </Col>
                         </Row> 
                         <Row className="secoond_row">
                             <Col md={12} lg={6}>
                                <div className="tools_image">
                               <img  src='/images/cycle one/Group 24.svg' />
                               </div> 
                               <Appointment  appointment={commingAppointment} loading={appointmentLoading}/>
                             </Col>
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
                         </Row>
                      </Col>
                      <Col sm={12} lg={3}>
                        <div className="employes">
                            <div className="title">RECENT EMPLOYEES</div>
                            {renderedEmployees}
                             <Link to='/workshop/owner/employes'>SEE ALL</Link>
                        </div>

                        <div className="employes">
                            <div className="title  margin_top">RECENT CUSTOMERS</div>
                           <CustomerInList name="Steve Stewart" addBy="YOU" />
                              <CustomerInList name="Mike Ford" addBy="Employee name"  />
                              <CustomerInList name="Mike Ford" addBy="Employee name"  />
                             <Link to='/workshop/owner/viewcustomer'>SEE ALL</Link>
                        </div>

                      </Col>
                  
                
                  </Row>
            </div>
        
        
            
        </>
    )
}

export default GrageOwnerDashbord
