import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AddSparePart = () => {
    return (
        <div className='add_sparePart'>
            <div className='header'>
            ADD SPARE PART

            </div>
            <div className='body'>
                <div className='upload'
                 onClick={()=> document.getElementById("my_file").click()}>

                    <img src='/images/cycle one/img.png'/>
                    <span>UPLOAD PHOTOS</span>
                </div>
       
            <input type="file" id="my_file" style={{display: "none"}} />

           
            <div className='input_Section'>
                <Row>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Select Type</label>
                            <input   type='text' /> 
                            <select name="Select Type" >
                                    <option >Select Type</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Part Name</label>
                            <input   placeholder='Part Name'/> 
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>Part Number</label>
                            <input   placeholder='Part Number'/> 
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>MRP</label>
                            <input   placeholder='Part MRP'/> 
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>QUANTITY</label>
                            <input   placeholder='QUANTITY'/> 
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>000$</label>
                            <input   type='text' placeholder='000$'/> 
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className='main_input'>
                            <label>BUY FROM</label>
                            <input   type='text' placeholder='SPARE PART SHOP'/> 
                    </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <div className='main_input'>
                            <label>PURCHASE AVAILABILITY</label>
                            <div  className='wider_input' >
                                 
                            <input type="radio" name='avaliability'  value="Available" />
                            <label for="vehicle1"> Available to be purchased</label>
                            <input type="radio"  name='avaliability' value="notAvaliable" />
                            
                            <label for="vehicle2"> Not Available</label>
                                
                            </div> 
                    </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <div className='main_input'>
                            <label className='textarea_label'>Part Description</label>
                            <textarea className='textareaa'  placeholder='Part Description' /> 
                    </div>
                    </Col>
                </Row>
                <input  className='btn' type='submit' value='Create New Part' />

            </div>
            </div> 

        
           
        </div>
    )
}

export default AddSparePart
