import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Part from './components/Part'
import {FaSearch} from 'react-icons/fa'

const PartsTransActionView = () => {
    return (
        <div className='parts_view'>
          <div className='header'>
            PURCHASE NUMBER
            <div className='right'>
                <input placeholder='Search Businesses' />
                <span>  <FaSearch /> </span>

            </div>

          </div>
          <div className='body'>
            <Row>
                <Col lg={6} md={12}>
                  <div className='part_div'>
                   <Part />
                 </div>
                </Col>
                <Col lg={6} md={12}>
                 <div className='part_div'>
                   <Part />
                 </div>
                </Col>
            </Row>
          </div>
        </div>
    )
}

export default PartsTransActionView
