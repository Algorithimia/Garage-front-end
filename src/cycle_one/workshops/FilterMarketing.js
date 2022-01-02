import React from 'react'
import { Link } from 'react-router-dom'

import InputTag from './InputTag'
import { useState } from 'react'
const FilterMarketing = ({getFilterTags}) => {
    const[tag,setTag]=useState({})
   
    // const getTags= (tags) => {
    //     setTag(tags)
    //     console.log(tags)
       
    // }
    return (
        <div className='opacity'>
            <div className="filter filter_marketing">
                <div className='title'>FILTER BY</div>
                <div className='tags'>
                <InputTag  getFilterTags={getFilterTags} />
                </div>
                
                <Link to='/workshop/owner/marketing'>      
                <button onClick={()=>getFilterTags({})} className='gray'>CANCEL</button>
                </Link>   
                <Link to='/workshop/owner/marketing'>
                <button className='blue' >FILTER</button>
                </Link>

            </div>

        </div>
    )
}

export default FilterMarketing
