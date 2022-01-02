import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddVehicle = ({path}) => {
    return (
        <div className='add_vehicle'>
          <div className='header'>
            ADD VEHICLES
          </div>
          <div className='vehicle_info'>
          <span>VECHILE INFO</span>
          <form>
          <Row>
              <Col md={6} lg={4}>
                
           

                    <div className='main_input'>
                                <label>Brand</label>
                                <input type='text' placeholder=''/>
                                    <select name="select Brand" >
                                            <option >select brand</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>

                  
              </Col>
              <Col md={6} lg={4}>
          
                 

                    <div className='main_input'>
                                <label>Model</label>
                                <input type='text' placeholder=''/>
                                    <select name="select Model" >
                                            <option >select brand</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>

                     
              </Col>
              <Col md={6} lg={4}>
            
                 

                    <div className='main_input'>
                                <label>Fuel Type</label>
                                <input type='text' placeholder=''/>
                                    <select name="select Fuel Type" >
                                            <option >select brand</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>

                     
              </Col>
         
              <Col md={6} lg={4}>
                  <div className='main_input'>
                        <label>Vehicle Number</label>
                        <input   type='text' placeholder='Vehicle Number'/> 
                   </div>
              </Col>
              <Col md={6} lg={4}>
                  <div className='main_input'>
                        <label>Kilometer Driven</label>
                        <input   type='text' placeholder='Kilometer Driven'/> 
                   </div>
              </Col>
              <Col md={6} lg={4}>
                  <div className='main_input'>
                        <label>Chassis Number</label>
                        <input   type='text' placeholder='Chassis Number'/> 
                   </div>
              </Col>
              <Col md={6} lg={4}>
                  <div className='main_input'>
                        <label>Engine Number</label>
                        <input   type='text' placeholder='Engine Number'/> 
                   </div>
              </Col>
              <Col md={6} lg={4}>
                  <div className='main_input'>
                        <label>Fuel Indicator</label>
                        <input  className='wider' type='text' placeholder='Fuel Indicator'/> 
                   </div>
              </Col>

          </Row>
          <Link to={path}>
             <input className='butn' type='submit' value='SAVE DETAILS' />
          </Link>
          </form>
          </div>
            
        </div>
    )
}

export default AddVehicle
