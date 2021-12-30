import React from 'react'

import {AiFillMessage} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const NotifyCustomer = () => {
    return (
        <div>
            <div className='opacity'>
                <div className='notify_customer'>
                    <div>NOTIFY BY</div>
                    <div className='notify_way'>
                        <Link to='/workshop/owner/paidinvoicess/notifybyemail'>
                        <button className='red'><span> <GrMail /> </span> Email </button>
                        </Link>
                        <Link to='/workshop/owner/paidinvoicess/notifybymessage'>
                        <button className='blue'><span> <AiFillMessage />  </span> Messages  </button>
                        </Link>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default NotifyCustomer
