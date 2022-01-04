import React from 'react'
import { Link } from 'react-router-dom'

const FilterAssets = () => {
    return (
        <div className='opacity'>
            <div className='filter'>
               <div className="title">FILTER BY</div>
               <div className='input'>
                   <select>
                       <option>ASSET TYPE</option>
                       <option>ASSET TYPE</option>
                       <option>ASSET TYPE</option>

                    </select>
                </div>
                <div className='input'>
                    <input  placeholder='Date                12MAR : 12ABR' />
                </div>

                <Link to='/workshop/owner/assets'>      
                <button className='gray'>CANCEL</button>
                </Link>   
                <Link to='/workshop/owner/assets'>
                <button className='blue'>FILTER</button>
                </Link>


            </div>
            
        </div>
    )
}

export default FilterAssets
