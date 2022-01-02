import React from 'react'
import { Link } from 'react-router-dom'

const PurchasePaypal = () => {
    return (
        <div className='payment_way paypal_way'>
            <form>
                <span className="visa">  
                <Link to='/workshop/owner/purchase/visa'>  <img src='/images/cycle one/visa.svg' /> </Link>
                </span>
                <span className="paypal"> 
                  <img src='/images/cycle one/paypal.svg' /> 
                </span>
                <div className="input_div">
                    <label>EMAIL ACCOUNT</label>
                    <br/>
                    <input  placeholder='justin.hayes@mail.com'/>
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
                <Link  to='/workshop/owner/purchase/visa/success'>
                    <input className="button" type='submit' value='PURCHASE' />
                </Link>
         </form>
            
        </div>
    )
}

export default PurchasePaypal
