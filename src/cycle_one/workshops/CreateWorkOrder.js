import { Col, Row } from "react-bootstrap"
import { Link, Routes, Route } from "react-router-dom"

import AfterWorkOrder from "./AfterWorkOrder"
const CreateWorkOrder = () => {
    return (
        <div className="create_work_order">
            <div className="main_ttitle">CREATE WORK ORDER</div>
            <form>
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
                  <div className="title">CUSTOMER INFO</div>
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
                            <input  type='tel' placeholder='Phone Number'/>
                        </div>
                      </Col>
                      <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Customer TAX ID</label>
                            <input type='text' placeholder='Customer TAX ID'/>
                        </div>
                      </Col>
                      <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Customer E-mail</label>
                            <input type='email' placeholder='Customer E-mail'/>
                        </div>
                      </Col>
                  </Row>
                  <Row>
                    <Col sm={12} lg={6} >
                            <div className='main_input'>
                                <label>Customer Address</label>
                                <textarea  className="big_input" type='text' placeholder='Customer Address'/>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} >
                            <div className='main_input'>
                                <label style={{left:'2%'}}>Order Remarks</label>
                                <textarea style={{marginLeft:'6.6%'}}  className="big_input" type='email' placeholder='Order Remarks'/>
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
