import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SuccessfulPurchase = () => {
    return (
        <div className='opacity'>
            <div className='success_purchase'>
                <img src='/images/cycle one/successpayment.svg' />
                <div className='green'>
                  <span>  <BsFillCheckCircleFill /> </span>
                    PURCHASE COMPLETED SUCCESSFULLY
                </div>
                <Link to='/'>
                    <button>PURCHASE NEW SAPRE PART</button>
                </Link>

            </div>
            
        </div>
    )
}

export default SuccessfulPurchase
