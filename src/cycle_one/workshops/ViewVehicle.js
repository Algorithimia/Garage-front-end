import React from 'react'
import { Col, Row } from 'react-bootstrap'
import User from './components/User'
import Car from './components/Car'
const ViewVehicle = () => {
    return (
        <div className='view_vehicle'>
            <div className='header'>
                <div>VEHICLE NUMBER</div>
            </div>
            <div className='secod_row'>
            <Row>
                <Col sm={6}>
                 <div className='car_view'> 
                     <Car />
                 </div>
                </Col>
                <Col sm={6}>
                 <User />
                </Col>
            </Row>
            </div>  

        </div>
    )
}

export default ViewVehicle
