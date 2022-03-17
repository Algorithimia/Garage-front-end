import React from 'react'
import { Link } from 'react-router-dom'
import OverlayList from '../../workshops/OverlayList'
const AssetsRow = ({type ,num, name,assignment ,date }) => {
    return (
        <tr>
           
            <th className={type}>{type}</th>
            <th> {num}</th>
            <th>{name}</th>
            <th>{date} </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th><th className='moreIcon'>
        

        <OverlayList option1='ASSIGN TO WORKORDER' option1_path='/employ/assets'
                 
                   
                     />
       
         </th>
     </th>
        </tr>    
           
    )
}

export default AssetsRow
