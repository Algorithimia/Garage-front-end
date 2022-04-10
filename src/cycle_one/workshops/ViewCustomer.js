import React , { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import {AiFillPlusCircle} from "react-icons/ai"
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"

import { Link, useParams } from 'react-router-dom'

import User from "./components/User"
import Car from "./components/Car"
import Order from "./components/Order"
import { useDispatch,useSelector } from 'react-redux'
import {getcustommers} from '../../store/store slices/workshopCustommerSlice'


  
const ViewCustomer = () => {
    const dispatch = useDispatch()
    let { id }  = useParams();
    const {custommers}= useSelector((state)=>state.customers)
    useEffect(() =>{
        dispatch(getcustommers());
      },[dispatch])

 const custommer =custommers && custommers.find(custommer => custommer.id == id)
 const renderedCars = custommer &&custommer.vehicles.map((vehicle)=>{
     return <Car car={vehicle} />
 })
    return (
        <div className="view_customer">
             <div className='first_line'>
                    <span>{custommer&&custommer.name}</span>
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
                    <User  custommer={custommer}/>
                    <div className="vehicle_and_orders">
                        <div className="title">COUSTOMER VEHICLES &amp; WORK ORDERS</div>
                        <Row>
                            <Col md={12} lg={6}>
                             <div className="cars">
                               {renderedCars}
                                 


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
