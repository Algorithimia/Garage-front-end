import React from 'react'
import { Col, Row } from 'react-bootstrap'


import SubscribtionAccount from './components/SubscribtionAccount'
const SubscribtionHistory = () => {
    return (
        <div className='subscribtion_history'>
            <div className='header'>
                ALL SUBSCRIBTION HISTORY
            </div>
            <div className='body'>
                <Row>
                    <Col md={6}>
                       <SubscribtionAccount way='visa' id='●●●● ●●●● ●●●● 4567' visa/>
                       <SubscribtionAccount way='visa'  id='●●●● ●●●● ●●●● 4567' visa/>
                       
                    </Col>
                    <Col md={6}>
                       <SubscribtionAccount way='paypal' id='benjamin.pearson@mail.com'  paypal />
                       <SubscribtionAccount way='paypal'  id='benjamin.pearson@mail.com' paypal/>
                    </Col>
                </Row>

            </div>
         
        </div>
    )
}

export default SubscribtionHistory
