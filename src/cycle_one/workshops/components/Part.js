import React from 'react'

import{MdCreditCard,MdDeleteSweep} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Part = () => {
    return (
        <div className='part'>
                PART 3
                <span className='right'> <Link to='/workshop/owner/purchase/visa'><span className='yello'><MdCreditCard /></span></Link> <span className='gray'><MdDeleteSweep /></span>  </span>
                <div className='hiddenlist'>
                <span>A/C air duct and vent</span>
                <br />
                QUANTITY
                <br />
                <span>01</span>
                <br />
                INVOICE NUMBER
                <br />
                <span>451</span>
                <br />
                DATE
                <br />
                <span>12/6</span>
                <table>
                    
                        <tr>
                            <th className='black'> Total</th>
                            <th className='blue'> Recieved</th>
                            <th  className='red'> Due</th>
                        
                        </tr>
                    
                    <tr className='bold'>
                        <th className='black' > 100 $</th>
                        <th  className='blue'>70 $ </th>
                        <th className='red'>30 $</th>
                        </tr>
            </table>
            </div>
        </div>
    )
}

export default Part
