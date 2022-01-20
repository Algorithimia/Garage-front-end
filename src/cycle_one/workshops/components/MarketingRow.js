import React from 'react'

import {AiFillMessage} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const MarketingRow = ({name, address, phone, mail, work_orders,multible}) => {
    return (
        <tr>
            <th className='check'> {multible &&<input type='checkbox'  value={name} />}{name}</th>
            <th>{address}</th>
            <th> {phone}</th>
            <th>{mail}</th>
            <th>{work_orders}</th>  
            <th></th>
            <th></th>
            <th>
                <Link to='/workshop/owner/marketing/notifybyemail'><span className='mail'><GrMail /> </span> </Link>
                <Link to='/workshop/owner/marketing/notifybymessage'><span className='msg'> <AiFillMessage /> </span> </Link>
                
                </th>
       </tr>
    )
}

export default MarketingRow
