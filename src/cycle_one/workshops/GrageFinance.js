import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import UsedPaymentMethods from './components/UsedPaymentMethods'
const GrageFinance = () => {
    return (
        <div className='grage_finance'>
           <div className='header'>
           GARAGE FINANCE

           </div>
           <div className='body'>
               <Row>
                   <Col lg={6}>
                     <div className='left'>
                         <div className='paid_inovices'>
                           <div className='line'>
                           PAID INVOICES
                           <span className='right'>"WORK ORDERS"</span>
                           </div>

                          
                          <div className='money'>
                               $ 25,833

                           </div>
                           <div className='end_line'>
                           6 total work orders
                           <Link to='/workshop/owner/paidinvoicess'>
                              <span >VIEW TRANSACTION</span>
                           </Link>

                          </div>
                          </div>

                          <div className='box'>
                              <div className='first_line'>
                              OVERDUE INVOICES
                              <Link to='/workshop/owner/alloverdue'>
                                 <button>ALL</button>
                              </Link>
                              </div>
                              <div className='money'>
                               $ 25,833
                              </div>
                              <div className="person">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
                                        <div className="inline-block">
                                            <div className="gray">Vincent Bradley</div>
                                            <div >100 $</div>
                                        </div>
                                        <div className="right">
                                            <Link to='/workshop/owner/paidinvoicess/notifyCustomer'> NOTIFY </Link>  
                                        </div>
                                </div>
                                <div className="person">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
                                        <div className="inline-block">
                                            <div className="gray">Vincent Bradley</div>
                                            <div >100 $</div>
                                        </div>
                                        <div className="right">
                                            <Link to='/workshop/owner/paidinvoicess/notifyCustomer'>NOTIFY</Link>  
                                        </div>
                                </div>



                          </div>
                          

                          <div className='paid_inovices'>
                                    <div className='line'>
                                       SENT PAYMENTS
                                        <span className='right'>"SPARE PARTS"</span>
                                    </div>

                                    
                                    <div className='money'>
                                        $ 25,833

                                    </div>
                                    <div className='end_line'>
                                       6 spare parts
                                        <Link to='/workshop/owner/alloverduesentpayment'>
                                            <span >VIEW TRANSACTION</span>
                                        </Link>
                                </div>
                          </div>


                     </div>
                   </Col>
                   <Col lg={6}>
                     <div className='right_div'>
                     <div className='box'>
                              <div className='first_line'>
                              TOTAL SALARIES
                              <Link to='/workshop/owner/addemploy'>
                                    <button>NEW</button>
                              </Link>
                              
                              </div>
                              <div className='money'>
                               $600
                              </div>
                              <div className="person">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
                                        <div className="inline-block">
                                            <div className="gray name">Vincent Bradley</div>
                                           
                                        </div>
                                        <div className="right salary">
                                            200 $
                                        </div>
                                </div>
                                <div className="person">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
                                        <div className="inline-block">
                                            <div className="gray name">Vincent Bradley</div>
                                           
                                        </div>
                                        <div className="right salary">
                                           200 $
                                         </div>
                                </div>
                                <Link to='/'> OPEN ALL</Link>
                          </div>
                          <div className='box'>
                              <div className='first_line'>
                                SUBSCRIBTION HISTORY
                                <Link to='/workshop/owner/subscribtion'>
                                   <button>UPGRADE</button>
                                </Link>
                             
                              </div>
                              <div className='yello'>
                              YOUR SUBSCRIPTION ENDS IN 15 DAYS

                              </div>
                              <div className='subscribtion'>
                               30 DAYS - 1 NOV : 30 NOV

                              </div>
                              <Link to='/workshop/owner/subscribtionhistory'>ALL HISTORY</Link>
                              </div>

                              <div className='box'>
                              <div className='first_line'>SAVED PAYMENT FOR TRANSACTIONS</div>   
                              <UsedPaymentMethods method='visa' payed='40' date='12/6' id={<div>            &nbsp;●●●●&nbsp; ●●●●  &nbsp; ●●●● &nbsp; 4567</div>} />
                              <div className='change'>
                                  <Link to='/'> CHANGE</Link>
                                </div>
                              </div>

                     </div>
                   </Col>
               </Row>

           </div>
        </div>
    )
}

export default GrageFinance
