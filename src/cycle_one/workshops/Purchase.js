import { Row , Col} from "react-bootstrap"
import {RiVisaLine} from 'react-icons/ri'
import {BsPaypal} from 'react-icons/bs'

const Purchase = () => {
    let result = "347405405655278".replace(/(.{4})/g, '$1    ');
    return (
        <div className="purchase">
            <div className="first_row">
               PURCHASE &#38; PAYMENT
            </div>
            <div className="second_row">
                <Row>
                    <Col>
                   
                    <div className="payment_way">
                    <form>
                    <span className="visa">  
                        <RiVisaLine />
                     </span>
                     <span className="paypal"> 
                        <BsPaypal />PayPal
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
                        <div className="input_div">
                        <label>GARAGE NAME</label> <br/>
                        <input placeholder="Name Here .." />
                     </div>
                     <input className="button" type='submit' value='PURCHASE' />
                     </form>
                     </div>
                     
                   
                    
                    </Col>

                    <Col>
                    <div>SAVED CARDS</div>
                     <div className="card">
                     <div  className="card_info">
                         <Row>
                             <Col>
                             Bankname
                             </Col>
                             <Col>
                            <RiVisaLine />
                             </Col>
                         </Row>
                         <div className="password">
                             ●●●● ●●●● ●●●● 4567
                         </div>
                            <div className="bold">
                            <span>CARDHOLDER NAME</span>
                            <span className="right">EXPIRE DATE</span>
                            </div>
                       
                        <div>
                            <span>John Doe</span>
                            <span className="right">05 / 2021</span>
                        </div>
                        </div>
                        <div className="center">USE CARD</div>

                     
                     </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Purchase
