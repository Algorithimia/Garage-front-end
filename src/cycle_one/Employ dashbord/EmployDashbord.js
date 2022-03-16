import React from "react"
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
import {Link} from "react-router-dom"

import BoxInfo from "../workshops/BoxInfo"
import IconBox from "../workshops/IconBox"

import CustomerInList from "../workshops/CustomerInList"
import Appointment from "../workshops/Appointment"
const EmployDashbord = () => {
    return (
        <>
        
          
            <div className="grage_owner_dashbord">
            <Row>
                  <Col sm={12}>
                  <div className="right logout">
                      <span><span className="icon"><FiLogOut /></span>logout</span>
                    
                  </div>
                  </Col>
               
                 
                      <Col  md={12} lg={9} className="width">
                          
                         <Row className="secoond_row">
                             
                             <Col md={12} lg={6}>
                             <Row className="justify-md-lg-center">
                            <Col  md={6}>
                                <BoxInfo icon={<RiTimer2Fill />} title='Created' number='120' bacGroundColor="#71A43F" path='/workshop/owner/allworkorders'/>
                            </Col>
                            <Col md={6} >
                                <BoxInfo icon={<GiSandsOfTime />} title='In Progress' number='2' bacGroundColor="#F2A911" path='/workshop/owner/allworkorders'/>
                            </Col>
                           
                         </Row> 
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
                    
                        <div className="employes employ-customers">
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


export default EmployDashbord