import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'


import Car from './components/Car'
const CreateWorkOrder2 = () => {
    return (
        <div className='create_work_order2'>
            <div className='header'>
               CHOOSE OF YOUR VEHICLES
               <Link to='/workshop/owner/addvehiclecustomer'>
                    <button className='right'>
                        <span><AiFillPlusCircle /> </span>
                            Add New Vehicle
                    </button>
               </Link>

            </div>
            <div className='body'>
                <Row>
                    <Col>
                        <div className='car_div'>
                            <Car />
                            <div className='btn_div'>
                                <Link to='/workshop/owner/choosegrage'>
                                <button>Choose</button>
                                </Link> 

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='car_div'>
                            <Car />
                             <div className='btn_div'>
                                <Link to='/workshop/owner/choosegrage'>
                                <button>Choose</button>
                                </Link> 

                             </div>
                        </div>
                    </Col>
                </Row>
               

            </div>
        </div>
    )
}

export default CreateWorkOrder2
