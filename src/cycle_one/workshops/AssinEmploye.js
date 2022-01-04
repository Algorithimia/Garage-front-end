import React from 'react'
import { Link } from 'react-router-dom'

const AssignEmploye = ({back='workshop/owner/allworkorders'}) => {
    return (
        <div className='opacity'>
            <div className='assign_employ'>
                <div>ASSIGN EMPLOYEE</div>
                <input type='search' name='employSearch' placeholder='SEARCH EMPLOYEE' />
                <div className='buttons'>
                   <Link to={back}> <button className='gray'>Cancel</button> </Link>
                   < Link to={back}> <button >Assign</button> </Link>
                </div>

            </div>
            
        </div>
    )
}

export default AssignEmploye
