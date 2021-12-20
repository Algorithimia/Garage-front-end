import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className="customer_info">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurDezj3Ot5v4QHW9mN8cfhxJVRnbsTraTWA&usqp=CAU'
        />
         <div className="title"> Jerry Watkins</div>
         <div className="personal_info">
             <span>025 235 658 65</span> <br/>
             <span>EMAIL@EXAMPLE.COM</span> <br/>
             <span>LOCATION</span> <br/>
         </div>
         <Link to='/workshop/owner/createoreditecustomer'>
           <button className="edit">EDIT INFO</button>
         </Link>
    </div>
    )
}

export default User
