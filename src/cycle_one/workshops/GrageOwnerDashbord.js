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

import { Row,Col } from "react-bootstrap"
import {Link} from "react-router-dom"

import BoxInfo from "./BoxInfo"
import IconBox from "./IconBox"
import EmployInList from "./EmployInList"
import CustomerInList from "./CustomerInList"
import Appointment from "./Appointment"
import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'

const GrageOwnerDashbord = () => {
    const dispatch = useDispatch()
    const {workorders}= useSelector((state)=>state.workOrders)
    useEffect(() =>{
        dispatch(getWorkOrders());
      
      },[dispatch])
      let createdWorkordersLenth=workorders.length
      let inProgressWorkordersLenth=workorders.filter(workOrder => workOrder.status == "In Progress").length
      let completedWorkordersLenth=workorders.filter(workOrder => workOrder.status == "Completed").length
     
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
                               <Appointment />
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
                           <EmployInList name="Steve Stewart" date="12 MAR" imgUrl="data:image/jpeg;base64,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" />
                              <EmployInList name="Mike Ford" date="12 MAR" imgUrl="data:image/jpeg;base64,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" />
                              <EmployInList name="Mike Ford" date="12 MAR" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
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
