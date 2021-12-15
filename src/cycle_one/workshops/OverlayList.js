 import {Popover, OverlayTrigger, Button} from 'react-bootstrap'
 import{BsThreeDotsVertical} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import React from 'react'

const OverlayList = () => {
    return (
        
            <>
  {['left'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          
          <div className='hidden_list'>
            <div className='option'>
           <Link to='/' style={{color:"#4390E0", fontWeight:"bold"  }}>VIEW WORK ORDER</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/' style={{color:"#4390E0", fontWeight:"bold" }}>ASSIGN EMPLOYEE</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/' style={{color:"#4390E0", fontWeight:"bold" }}>ASSIGN SPARE PARTS</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/' style={{color:"#4390E0", fontWeight:"bold" }}>VIEW CUSTOMER</Link>
           <br />
           </div>
           <div className='option'>
           <Link to='/' style={{color:"#4390E0", fontWeight:"bold" }}>VIEW VEHICLE</Link>
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
