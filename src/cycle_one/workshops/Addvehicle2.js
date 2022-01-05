import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Addvehicle2 = () => {
    return (
        <div className='add_vehicle2'>
        <div className='header'>
             ADD VEHICLES

            <div className='input_div'>
                  <input placeholder='Search Vehicles' />
                    <div className='icon'><FaSearch /></div> 
              </div>
        </div>   
        <div className='body'>
            <form>
            <div className='info'>
                <span>CUSTOMERINFO</span>
                <Row>
                 <Col md={6} lg={4}>
                    <div className='main_input'>
                        <label>Customer Name</label>
                        <input type='text' placeholder='Customer Name'/>
                        
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                    <div className='main_input'>
                        <label>Phone Number</label>
                        <input type='tel' placeholder='Phone Number'/>
                        
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                    <div className='main_input'>
                        <label>Customer Name</label>
                        <input type='text' placeholder='Customer Name'/>
                        
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                    <div className='main_input'>
                        <label>Customer Name</label>
                        <input type='text' placeholder='Customer Name'/>
                        
                    </div>
                    </Col>
                    
                        <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Customer Name</label>
                            <input type='text' placeholder='Customer Name'/>
                            
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Phone Number</label>
                            <input type='tel' placeholder='Phone Number'/>
                            
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Customer Name</label>
                            <input type='text' placeholder='Customer Name'/>
                            
                        </div>
                        </Col>
                   
                   
                </Row>
                <div className='info'>
                 
                 <span>VECHILE INFO</span>
                <Row>
              <Col sm={6} md={4}>
                
           

                    <div className='main_input'>
                                <label>Brand</label>
                                <br/>
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
                                <br/>
                                <input type='text' placeholder=''/>
                                    <select name="select Model" >
                                            <option >select Model</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>

                     
              </Col>
              <Col sm={6} md={4}>
            
                 

                    <div className='main_input'>
                                <label>Fuel Type</label>
                                <br/>
                                <input type='text' placeholder=''/>
                                    <select name="select Fuel Type" >
                                            <option >select Fuel Type</option>
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
                        <label>Vehicle Number</label>
                        <input   type='text' placeholder='Vehicle Number'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Kilometer Driven</label>
                        <input   type='text' placeholder='Kilometer Driven'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Chassis Number</label>
                        <input   type='text' placeholder='Chassis Number'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Engine Number</label>
                        <input   type='text' placeholder='Engine Number'/> 
                   </div>
              </Col>
              <Col sm={6} md={4}>
                  <div className='main_input'>
                        <label>Fuel Indicator</label>
                        <input  className='wider' type='text' placeholder='Fuel Indicator'/> 
                   </div>
              </Col>

          </Row>
          </div>


            </div>

            <Link to='/workshop/owner/vehicle2'>
             <input className='butn' type='submit' value='SAVE DETAILS' />
          </Link>
         </form>
        </div>    
    
        </div>
    )
}

export default Addvehicle2
