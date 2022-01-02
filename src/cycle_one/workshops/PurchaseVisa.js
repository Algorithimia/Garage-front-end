import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { Row , Col} from "react-bootstrap"
import SuccessfulPurchase from './SuccessfulPurchase';
const PurchaseVisa = ({ paypal_path='/workshop/owner/purchase/paypal', successLink='/workshop/owner/purchase/visa/success'}) => {
    let result = "347405405655278".replace(/(.{4})/g, '$1    ');
    return (
        <div className="payment_way">
        <form>
        <span className="visa">  
            <img src='/images/cycle one/visa.svg' />
         </span>
         <span className="paypal"> 
         <Link to={paypal_path}>  <img src='/images/cycle one/paypal.svg' /> </Link>
         </span>
         <br />
         
         <div className="input_div">
            <label>CARD NUMBER</label>
            <br/>
            <input  placeholder={result}/>
         </div>
        
             <Row>
             <Col sm={8}>
             <div className="input_div">
            <label>EXPIRE DATE</label> <br />
            <input  type='date'  />
            </div>
            </Col>
            <Col sm={3}>
            <div className="input_div">
            <label>cvv</label> <br />   
            <input placeholder='123'/>
            </div>
            </Col>
            </Row>
            <div className="input_div">
            <label>CARD HOLDER NAME</label> <br />
            <input placeholder="Your Name" /> 
            </div>
            <div className="input_div">
            <div className="center"> 
            <input type='checkbox' name="save" /> 
            <label className="inline-block">SAVE CARD</label> 
            </div>
            </div>
            <div className="input_div">
            <label>TOTAL AMOUNT $</label>
            <br />
            <input type='number'  placeholder="500 $"/> <br />
            </div>
            <div className="input_div grage_name">
            <label>GARAGE NAME</label> <br/>
            <input placeholder="Name Here .." />
         </div>
         <Link  to={successLink}>
           <input className="button" type='submit' value='PURCHASE' />
         </Link>
         </form>
         <Routes>
           < Route path="/success" element={<SuccessfulPurchase success_message={<>SUCCESSFULLY UPGRADED TO <span className='thirtydays'> 30 DAYS </span> PLAN</>} />} exact  /> 
         </Routes>
         </div>
    )
}

export default PurchaseVisa
