import React from 'react'
import { Col, Row } from 'react-bootstrap'

import InputTags from './InputTag'

const CreateOrEditeCustomer = () => {
    return (
        <div className='create_or_edite_customer'>
           <div className='header'>
           GARAGE COUSTOMERS

           </div>
           <div className='body'>
              <form>
               <Row>
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
                   <Col md={6} lg={8}>
                     <div className='main_input'>
                        <label>Customer Address</label>
                        <input  className='wider' type='text' placeholder='Customer Address'/> 
                     </div>
                   </Col>
                
               </Row>
               <Row>
                    <Col md={6} lg={8}>
                            <div className='main_input'>
                                <label  style={{left:'1%'}}>Marketing tags</label>
                                <div  className='tags' type='text'  data-role="tagsinput">   <InputTags /></div> 
                              
                            </div>
                    </Col>
               </Row>
               <input className='butn' type='submit'  value='SAVE DETAILS' />
             </form>  

            
           </div>

        </div>
    )
}

export default CreateOrEditeCustomer
