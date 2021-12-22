 import {Popover, OverlayTrigger, Button} from 'react-bootstrap'
 import{BsThreeDotsVertical} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import React from 'react'

const OverlayList = () => {
    return (
        
            <>
  {['left'].map((placement) => (
    <OverlayTrigger
      trigger="focus"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          
          <div className='hidden_list'>
            <div className='option'>
           <Link to='/workshop/owner/singleworkorder' style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>VIEW WORK ORDER</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/workshop/owner/allworkorders/assignEmploye' style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>ASSIGN EMPLOYEE</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/workshop/owner/selectinventory' style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>ASSIGN SPARE PARTS</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/workshop/owner/viewcustomer' style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>VIEW CUSTOMER</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/workshop/owner/viewvehicle' style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>VIEW VEHICLE</Link>
           </div>
          </div>
        </Popover>
      }
    >
      <button><BsThreeDotsVertical /></button>
    </OverlayTrigger>
  ))}
</>
    
    )
}

export default OverlayList
