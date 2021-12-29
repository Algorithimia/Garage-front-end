import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GrageFinance = () => {
    return (
        <div className='grage_finance'>
           <div className='header'>
           GARAGE FINANCE

           </div>
           <div className='body'>
               <Row>
                   <Col md={6}>
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
                           <Link to='/'>
                              <span >VIEW TRANSACTION</span>
                           </Link>

                          </div>
                          </div>

                          <div className='overdue_invoices'>
                              <div className='first_line'>
                              OVERDUE INVOICES
                              <button>ALL</button>
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
                                            <Link to='/'> NOTIFY </Link>  
                                        </div>
                                </div>
                                <div className="person">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU" />
                                        <div className="inline-block">
                                            <div className="gray">Vincent Bradley</div>
                                            <div >100 $</div>
                                        </div>
                                        <div className="right">
                                            <Link to='/'>NOTIFY</Link>  
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
                                        <Link to='/'>
                                            <span >VIEW TRANSACTION</span>
                                        </Link>
                                </div>
                          </div>


                     </div>
                   </Col>
                   <Col md={6}>
                     <div className='right_div'>
                     <div className='overdue_invoices'>
                              <div className='first_line'>
                              TOTAL SALARIES
                              <button>NEW</button>
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

                     </div>
                   </Col>
               </Row>

           </div>
        </div>
    )
}

export default GrageFinance
