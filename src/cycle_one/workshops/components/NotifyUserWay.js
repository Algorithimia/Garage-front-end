import React from 'react'

import {AiFillMessage} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const NotifyUserWay = ({ way}) => {
    return (
        <div className='opacity'>
            <div className='notify_user_way'>
                <div className={`header_notify ${way}`}>
                    <span className='way_name'> {way} </span>
                    Tyler Baker
                    
                   <span className='right'> {way=='EMAIL'? <GrMail /> : <AiFillMessage />} </span>
                </div>
                <div className='body'>
                    <form>
                    <div className='main_input'>
                                <label className='textarea_label'>Message</label>
                                <textarea className='textareaa'  placeholder='Feel free to tell your message to customers ..' /> 
                    </div>
                      <Link to='/workshop/owner/paidinvoicess'>
                     <input className='btn' type='submit' value='Send' /> 
                     </Link>
                    </form>

                </div>


            </div>
            
        </div>
    )
}

export default NotifyUserWay
