import React from 'react'
import { Link } from 'react-router-dom'
 
const User = ({custommer,isLoading}) => {
    return (
        <div className="customer_info">
        {isLoading || !custommer ? 'loading ..' : <>
        { custommer &&    <img 
            src={custommer.avater}
            />}
            {custommer &&  <div className="title"> {custommer.name}</div>}
            <div className="personal_info">
            { custommer &&  <span>{custommer.phone}</span>} <br/>
                {  custommer && <span>{custommer.email}</span>} <br/>
                <span>LOCATION??</span> <br/>
            </div>
            <Link to='/workshop/owner/createoreditecustomer'>
            <button className="edit">EDIT INFO</button>
            </Link>
            </>}
    </div>
    )
}

export default User
