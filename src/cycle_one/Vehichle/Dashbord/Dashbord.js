import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GARAGEWORKSHOPS from './GARAGEWORKSHOPS'
import YourVehicles from './YourVehicles'

const Dashbord = () => {
  return (
    <div className='dashbord'>
      <Row>
        <Col md={4}>
          <YourVehicles />
        </Col>
        <Col md={4}>
          <GARAGEWORKSHOPS />
        </Col>
      </Row>
       
    </div>
  )
}

export default Dashbord