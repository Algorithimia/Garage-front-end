import React from 'react'

import {AiFillMessage} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
const MarketingRow = ({name, address, phone, mail, work_orders}) => {
    return (
        <tr>
            <th className='check'> <input type='checkbox'  value={name} />{name}</th>
            <th>{address}</th>
            <th> {phone}</th>
            <th>{mail}</th>
            <th>{work_orders}</th>  
            <th></th>
            <th></th>
            <th><span className='mail'><GrMail /> </span> <span className='msg'> <AiFillMessage /> </span></th>
       </tr>
    )
}

export default MarketingRow
