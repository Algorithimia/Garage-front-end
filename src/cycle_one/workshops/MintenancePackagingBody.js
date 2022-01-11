import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import MintenancePackage from './components/MintenancePackage'
const MintenancePackagingBody = () => {
    return (
        <div className='body'>
            <Link to='/workshop/owner/maintnance/add'><button><span><AiFillPlusCircle /> Add New Package</span></button></Link>
            <div className='packages'>
                <Row>
                    <Col md={12} lg={6}>
                        <MintenancePackage />
                    </Col>
                    <Col md={12} lg={6}>
                        <MintenancePackage />
                    </Col>
                    
                </Row>
            </div>  

    </div>
    )
}

export default MintenancePackagingBody
