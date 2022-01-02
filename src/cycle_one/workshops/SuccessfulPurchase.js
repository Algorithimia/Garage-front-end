import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SuccessfulPurchase = ({button='PURCHASE NEW SAPRE PART', success_message, success_button, success_button_link}) => {
    return (
        <div className='opacity'>
            <div className='success_purchase'>
                <img src='/images/cycle one/successpayment.svg' />
                <div className='green'>
                  <span>  <BsFillCheckCircleFill /> </span>
                   {success_message}
                </div>
                <Link to={success_button_link}>
                    <button>{success_button}</button>
                </Link>

            </div>
            
        </div>
    )
}

export default SuccessfulPurchase
