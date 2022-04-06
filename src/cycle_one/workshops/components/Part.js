import React, { useState } from 'react'

import{MdCreditCard,MdDeleteSweep} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Part = ({sparePart}) => {
    const[showList, setShowList] = useState(false)
    return (
        <div className='part'>
            <div onClick={() =>setShowList(!showList)}>
           { sparePart.spare_part? sparePart.spare_part.title : sparePart.title}
                <span className='right'> <Link to='/workshop/owner/purchase/visa'><span className='yello'><MdCreditCard /></span></Link> <span className='gray'><MdDeleteSweep /></span>  </span>
            </div>
               
               {showList && <div className='hiddenlist'>
                <span>{sparePart.spare_part ?  sparePart.spare_part.description : sparePart.description }</span>
                <br />
                QUANTITY
                <br />
                <span>{sparePart.spare_part ?  sparePart.spare_part.quantity : sparePart.quantity}</span>
                <br />
                INVOICE NUMBER
                <br />
                <span>??</span>
                <br />
                DATE
                <br />
                <span>{sparePart.spare_part? sparePart.spare_part.total_price :sparePart.total_price }</span>
                <table>
                    
                        <tr>
                            <th className='black'> Total</th>
                            <th className='blue'> Recieved</th>
                            <th  className='red'> Due</th>
                        
                        </tr>
                    
                    <tr className='bold'>
                        <th className='black' > { sparePart.total_price}</th>
                        <th  className='blue'>{ sparePart.paid} </th>
                        <th className='red'>{ sparePart.due_amount}</th>
                        </tr>
            </table>
                </div>}
        </div>
    )
}

export default Part
