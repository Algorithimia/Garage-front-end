import React from 'react'
import { Link } from 'react-router-dom'

const AssetsRow = ({type ,num, name,assignment ,date }) => {
    return (
        <tr>
           
            <th className={type}>{type}</th>
            <th> {num}</th>
            <th>{name}</th>
            <th>{assignment}</th>  
            <th>{date} </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th><Link to='/workshop/owner/assets/assignemploy'><button className='assign'>ASSIGN</button></Link></th>
        </tr>    
           
    )
}

export default AssetsRow
