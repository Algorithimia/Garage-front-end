import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddVehicle = () => {
    return (
        <div className='add_vehicle'>
          <div className='header'>
            ADD VEHICLES
          </div>
          <div className='vehicle_info'>
          <span>VECHILE INFO</span>
          <form>
          <Row>
              <Col sm={6} md={4}>
                
           

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
              <Col sm={6} md={4}>
          
                 

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
              <Col sm={6} md={4}>
            
                 

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
          </Row>
          <Row>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                   </div>
              </Col>

          </Row>
          <Link to='/workshop/owner/viewvehicle'>
             <input className='butn' type='submit' value='SAVE DETAILS' />
          </Link>
          </form>
          </div>
            
        </div>
    )
}

export default AddVehicle
