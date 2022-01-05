import { Col, Row } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { Link, Routes, Route } from "react-router-dom"

import AfterWorkOrder from "./AfterWorkOrder"
const CreateWorkOrder = () => {
    return (
        <div className="create_work_order">
            <div className="main_ttitle">CREATE WORK ORDER
            
             <div className="right">
                 <input placeholder="Search customers" />
                 <span> <FaSearch /> </span>
             </div>
            </div>
           
            <form>
                <div className="customer_info_create">
                <div className="title">CUSTOMER INFO</div>
                <Row>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Phone Number</label>
                            <input type='text' placeholder='Phone Number'/>
                        </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Customer Name</label>
                            <input type='text' placeholder='Customer Name'/>
                        </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Customer TAX ID</label>
                            <input type='text' placeholder='Customer TAX ID'/>
                        </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Customer E-mail</label>
                            <input type='text' placeholder='Customer E-mail'/>
                        </div>
                </Col>
                <Col lg={8} md={12} className="margin_top">
                    <Row>
                       <Col sm={4} className="margin_top">
                            <div className='main_input left_select'>
                                <label>Country</label>
                                <input type='text' placeholder=''/>
                                    <select name="select Country" >
                                            <option >Egypt</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                            <div className='main_input center_select'>
                                <label>City</label>
                                <input type='text' placeholder=''/>
                                    <select name="select City" >
                                            <option >Cairo</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                            <div className='main_input right_select'>
                                <label>Area</label>
                                <input type='text' placeholder=''/>
                                    <select name="select Area" >
                                            <option  >New Cairo</option>
                                            <option> option 1</option>
                                            <option> option 2</option>
                                            <option> option 3</option>
                                    </select>
                            </div>
                            
                      </Col>   
                      </Row>   

                </Col>
            </Row>

                </div>
                <div className="vechile_info">
                <div className="title">VECHILE INFO</div>
                 <Row>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Brand</label>
                        <input type='text' placeholder=''/>
                            <select name="select brand" >
                                    <option disabled>select brand</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Model</label>
                        <input type='text' placeholder=''/>
                            <select name="select Model" >
                                    <option disabled >select Model</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Fuel Type</label>
                        <input type='text' placeholder=''/>
                            <select name="select Fuel Type" >
                                    <option disabled >select brand</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Vehicle Number</label>
                        <input type='text' placeholder=''/>
                            <select name="select Vehicle Number" >
                                    <option disabled>select brand</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Kilometer Driven</label>
                            <input type='text' placeholder='Kilometer Driven'/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Chassis Number</label>
                            <input type='text' placeholder='Chassis Number'/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Engine Number</label>
                            <input type='text' placeholder='Engine Number'/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Fuel Indicator</label>
                            <input type='text' placeholder='Fuel Indicator'/>
                        </div>
                     </Col>
                 </Row>

                </div>
               
                  <div className="customer_info_create">
                  <div className="title">WORK ORDER INFO</div>
                  <Row>
                 
                        <Col sm={12} lg={6} >
                            <div className='main_input'>
                                <label style={{left:'2%'}}>Order Remarks</label>
                                <textarea  className="big_input" type='email' placeholder='Order Remarks'/>
                            </div>
                        </Col>
                  </Row>
                </div>
               <Link to='/workshop/owner/createworkeorder/afterworkorder'> <input className='dark_button' type='submit' value='Create Order'/> </Link> 
            </form>

            <Routes>
                    <Route path="/afterworkorder" element={<AfterWorkOrder  back='BACK TO WORK ORDERS' path='/workshop/owner/allworkorders' />} exact  />
            </Routes>
        </div>
    )
}

export default CreateWorkOrder
