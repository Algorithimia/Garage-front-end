import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user,isLoading}) => {
    return (
        <div className="customer_info">
        {isLoading || !user ? 'loading ..' : <>
        { user &&    <img 
            src={user.avater}
            />}
            {user &&  <div className="title"> {user.name}</div>}
            <div className="personal_info">
            { user &&  <span>{user.phone}</span>} <br/>
                {  user && <span>{user.email}</span>} <br/>
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
