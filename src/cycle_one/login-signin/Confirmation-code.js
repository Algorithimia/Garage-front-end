
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
const Confirmation_code = () => {
    return (
        <div className='login confirmation'>
            <form>
            <div className="text">Please Enter The Confirmation Code Sent To Your<div className="bold"> Email</div></div> 

            <div className='main_input'>
               <label>Confirmation Code</label>
               <input  placeholder='6 digit numbers'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <div className="timer">
             <span className="blue">Resend</span> 02 : 48
           </div>
           <div className="line"></div>


           <div className="text">Please Enter The Confirmation Code Sent To Your <div className="bold">Phone Number</div></div> 

            <div className='main_input'>
            <label>Confirmation Code</label>
            <input  placeholder='6 digit numbers'/>
                <div className='mark'><FcCheckmark /></div> 
            
           </div>
           <div className="timer">
             <span className="blue">Resend</span> 02 : 48
           </div>
          
           
           <div className="action">
             <Link to='/login_process/owner_login'>
                <input className='dark_button' type='submit' value='Confirm'/> 
           </Link> 
             
            </div>    
            </form>
        </div>
    )
}

export default Confirmation_code
