import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { RiEditLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MintenancePackage = () => {
    return (
        <div className='package'>
            <div className='img'>
              <img  src='/images/cycle one/workshop.jpg' />

            </div>
            <div className='info'>
            <div className='title'>
                PACKAGE TITLE GOES HERE ...
            </div>
            <div className='endline'>
                PRICE <span>20 $</span>
                <span className='right'>

                <span><MdDeleteSweep /></span>
          <Link to='/workshop/owner/maintnance/add'>  <span className="blue"><RiEditLine /></span> </Link>
                </span>

            </div>
            </div>
            
        </div>
    )
}

export default MintenancePackage
