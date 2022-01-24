import { Col, Row } from "react-bootstrap"
import {AiFillPlusCircle} from "react-icons/ai"
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"

import { Link } from 'react-router-dom'

import User from "./components/User"
import Car from "./components/Car"
import Order from "./components/Order"
const ViewCustomer = () => {
    return (
        <div className="view_customer">
             <div className='first_line'>
                    <span>GARAGE COUSTOMERS</span>
                    <div className="right">

                        <div className='inline-block'><Link to='/workshop/owner/createoreditecustomer'><button className="blue"><span><AiFillPlusCircle  /> </span> Add New COUSTOMERS</button></Link></div>
                    </div>
                </div>
                <div className="body">
                    <button className="right">DELETE CUSTOMER</button>
                    {/* <div className="customer_info">
                        <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurDezj3Ot5v4QHW9mN8cfhxJVRnbsTraTWA&usqp=CAU'
                        />
                         <div className="title"> Jerry Watkins</div>
                         <div className="personal_info">
                             <span>025 235 658 65</span> <br/>
                             <span>EMAIL@EXAMPLE.COM</span> <br/>
                             <span>LOCATION</span> <br/>
                         </div>
                         <Link to='/workshop/owner/createoreditecustomer'>
                           <button className="edit">EDIT INFO</button>
                         </Link>
                    </div> */}
                    <User />
                    <div className="vehicle_and_orders">
                        <div className="title">COUSTOMER VEHICLES &amp; WORK ORDERS</div>
                        <Row>
                            <Col md={12} lg={6}>
                             <div className="cars">
                                <Car  />
                                 <Car view='true'/>
                                 <Car />

                                 


                             </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="orders">
                                  
                                    <div className="right_icons">
                                       <span><MdDeleteSweep /></span>
                                      <Link to='/workshop/owner/createworkeorder'><span className="blue"><RiEditLine /></span> </Link> 
                                   </div>
                                 <div className="orders_list">
                                    <Order view='true' />
                                    <Order  />
                                    <Order  />
                                    
                                  </div>

                                </div>
                            
                            </Col>
                        </Row>

                    </div>
                   

                </div>
        </div>
    )
}

export default ViewCustomer
