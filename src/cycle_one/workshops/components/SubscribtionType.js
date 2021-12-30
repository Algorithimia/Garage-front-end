import React from 'react'
import { Link } from 'react-router-dom'

const SubscribtionType = ({price, days }) => {
    return (
        <div className='subscribtion_type'>

            <div className='days'>
                <span className='num'>{days}</span>
                 <br/>
                 <span className='text'>DAYS</span>
            </div>
            <div className='price'>
                 {price}$
            </div>

            <Link to='/'>UPGRADE</Link>
        </div>
    )
}

export default SubscribtionType
