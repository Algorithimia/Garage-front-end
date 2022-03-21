import React from 'react'
import { Col, Row } from 'react-bootstrap'
import YourVehicles from './YourVehicles'

const Dashbord = () => {
  return (
    <div className='dashbord'>
      <Row>
        <Col md={4}>
          <YourVehicles />
        </Col>
      </Row>
       
    </div>
  )
}

export default Dashbord