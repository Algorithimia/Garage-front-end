 import {Popover, OverlayTrigger, Button} from 'react-bootstrap'
 import{BsThreeDotsVertical} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import React, { useState,useEffect ,useRef} from 'react'


function useOutsideAlerter(ref,setShow) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}

const OverlayList = ({option1, option1_path,
option2, option2_path,
option3, option3_path,
option4, option4_path,  
option5, option5_path }) => {
  const[show,setShow]=useState(false)
   // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShow);
    return (
        
            <>
            
            <button onClick={()=>setShow(!show)}><BsThreeDotsVertical /></button>
{show &&<div className='table_hidden_list'  ref={wrapperRef}>
            <div className='option'>
           <Link to={option1_path} style={{color:"#4390E0", fontWeight:"bold"}}>{option1}</Link>
           <br />
           </div>
           {  option2 &&<div className='option'>
           <Link to={option2_path} >{option2}</Link>
           <br />
           </div>
            }
           {  option3 && <div className='option'>
           <Link to={option3_path} >{option3}</Link>
           <br />
           </div>}
         {  option4 && <div className='option'>
           <Link to={option4_path} >{option4}</Link>
           <br />
           </div>}
           {option5 && <div className='option'>
           <Link to={option5_path} >{option5}</Link>
           </div>}
     </div>}
           
       
    
  
    
    

  {/* {['left'].map((placement) => (
    <OverlayTrigger
      trigger="focus"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          
          <div className='hidden_list'>
            <div className='option'>
           <Link to={option1_path} style={{color:"#4390E0", fontWeight:"bold"}}>{option1}</Link>
           <br />
           </div>
           <div className='option'>
           <Link to={option2_path} style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>{option2}</Link>
           <br />
           </div>
           <div className='option'>
           <Link to={option3_path} style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>{option3}</Link>
           <br />
           </div>
         {  option4 && <div className='option'>
           <Link to={option4_path} style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>{option4}</Link>
           <br />
           </div>}
           {option5 && <div className='option'>
           <Link to={option5_path} style={{color:"#4390E0", fontWeight:"bold", borderBottom:'1px solid #00000029' }}>{option5}</Link>
           </div>}
          </div>
           
        </Popover>
      }
    >
      <button><BsThreeDotsVertical /></button>
    </OverlayTrigger>
  ))} */}
</>
    
    )
}

export default OverlayList
