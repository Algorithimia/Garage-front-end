import { Col, Row } from "react-bootstrap"
import {AiFillPlusCircle} from "react-icons/ai"
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"
import{FaCar} from 'react-icons/fa'
import { Link, Route,Routes } from 'react-router-dom'

import User from "./components/User"
import Car from "./components/Car"
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
                            <Col sm={12} md={6}>
                             <div className="cars">
                                 <div className="car">
                                   CAR NAME
                                   <div className="right_icons">
                                       <span><MdDeleteSweep /></span>
                                       <span className="blue"><RiEditLine /></span>
                                   </div>
                                 </div>
                                 <div className="car">
                                   CAR NAME
                                   <div className="right_icons">
                                       <span><MdDeleteSweep /></span>
                                       <span className="blue"><RiEditLine /></span>
                                   </div>
                                 </div>
                                 <Car />
                                 


                             </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="orders">
                                  
                                    <div className="right_icons">
                                       <span><MdDeleteSweep /></span>
                                       <span className="blue"><RiEditLine /></span>
                                   </div>
                                 <div className="orders_list">
                                    <div className="order">
                                        order 1
                                    </div>
                                    <div className="order">
                                        order 2
                                    </div>
                                    <div className="order">
                                        order 3
                                        <div className="more">
                                          <div className="text">
                                            <div><FaCar /> &nbsp; ABC 569 &nbsp;  BMW &nbsp;  2017 &nbsp; Deseil</div>
                                            <div>10 MAR 2021</div> 
                                            <div>customer name</div>
                                             <div>ABC 569</div>
                                           </div> 
                                           <table>
                                                
                                                <tr>
                                                    <th className='black'> Total</th>
                                                    <th className='blue'> Recieved</th>
                                                    <th  className='red'> Due</th>
                                                
                                                </tr>
                                            
                                                <tr className='bold'>
                                                    <th className='black' > 100 $</th>
                                                    <th  className='blue'>70 $ </th>
                                                    <th className='red'>30 $</th>
                                                 </tr>
                                            </table>

                                        </div>
                                    </div>
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
