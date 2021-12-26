import React from 'react'
import { Link } from 'react-router-dom'

const TransactionRow = ({num, payment_type, date, description, total, paid, due }) => {
    return (
        <tr>
            <th>{num}</th>
            <th className={payment_type}>{payment_type}</th>
            <th>{date}</th>
            <th>{description}</th>
            <th>{total}</th>
            <th>{paid}</th>
            <th>{due}</th>
            <th><Link to='/workshop/owner/partstransactionview'><button>VIEW</button></Link></th>
    </tr>
    )
}

export default TransactionRow
