import { Row , Col} from "react-bootstrap"
import {RiVisaLine} from 'react-icons/ri'
import {BsPaypal} from 'react-icons/bs'

import PurchaseVisa from "./PurchaseVisa"
import PurchasePaypal from "./PurchasePaypal"
import { Routes, Route } from "react-router-dom"

const PurchaseSubsccribtion = () => {
  
    return (
        <div className="purchase purchase_sub"> 
            <div className="first_row">
               PURCHASE &#38; PAYMENT
            </div>
            <div className="second_row">
                <Row>
                    <Col>
                   <Routes>

                        <Route path="/visa/*" element={<PurchaseVisa />} exact  /> 
                        <Route path="/paypal" element={<PurchasePaypal />} exact  /> 
                    
                   </Routes>
     
                  
                   
                    
                    </Col>

                    <Col>
                    <div className="saved_cards">SAVED CARDS</div>
                     <div className="card">
                     <div  className="card_info">
                         <Row>
                             <Col>
                             Bankname
                             </Col>
                             <Col>
                             <img  className="right_img" src='/images/cycle one/visa.svg' /> 
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

export default PurchaseSubsccribtion 
