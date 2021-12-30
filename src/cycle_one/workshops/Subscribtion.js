import React from 'react'
import { Row, Col } from 'react-bootstrap'


import SubscribtionType from './components/SubscribtionType'
const Subscribtion = () => {
    return (
        <div className='subscription_page'>
            <div className='header'>
                SUBSCRIPTION PLAN
                <span>YOUR SUBSCRIPTION ENDS IN 15 DAYS </span>

            </div>
            <div className='body'>
                <Row>
                    <Col sm={6} lg={3}>
                        <SubscribtionType  price='10' days='30'/>
                    </Col>
                    <Col sm={6} lg={3}>
                        <SubscribtionType   price='20' days='60'/>
                    </Col>
                    <Col sm={6} lg={3}>
                        <SubscribtionType   price='30' days='90'/>
                    </Col>
                    <Col sm={6} lg={3}>
                        <SubscribtionType   price='100' days='360'/>
                    </Col>
                </Row>

                <div className='help'>  NEED HELP !  </div>

            </div>


           
        </div>
    )
}

export default Subscribtion
