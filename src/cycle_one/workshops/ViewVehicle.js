import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {AiFillPlusCircle} from "react-icons/ai"
import User from './components/User'
import Car from './components/Car'
import { Link } from 'react-router-dom'
const ViewVehicle = () => {
    return (
        <div className='view_vehicle'>
            <div className='header'>
                <span>VEHICLE NUMBER</span>
              <Link to='/workshop/owner/addvehicle'><button className="blue"><span><AiFillPlusCircle  /> </span>Add New Vehicle</button></Link>
            </div>
            <div className='secod_row'>
            <Row>
                <Col xs={12}lg={6}>
                 <div className='car_view'> 
                     <Car view='true'/>
                 </div>
                </Col>
                <Col lg={6}>
                 <User />
                </Col>
            </Row>
            </div>  

        </div>
    )
}

export default ViewVehicle
