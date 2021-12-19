import React from 'react'
import { Link } from 'react-router-dom'

const AssignEmploye = () => {
    return (
        <div className='opacity'>
            <div className='assign_employ'>
                <div>ASSIGN EMPLOYEE</div>
                <input type='search' name='employSearch' placeholder='SEARCH EMPLOYEE' />
                <div className='buttons'>
                   <Link to='workshop/owner/allworkorders'> <button className='gray'>Cancel</button> </Link>
                    <button >Assign</button>
                </div>

            </div>
            
        </div>
    )
}

export default AssignEmploye
