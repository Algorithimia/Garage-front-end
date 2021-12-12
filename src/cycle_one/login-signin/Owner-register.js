import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
const Owner_register = () =>{
    return(
        <>
         <div className='login owner_register'>
            <div className='owner_or_employee active'>
                        <img src="/images/cycle one/service_icons/icon_2.png" />
                        <div className="inline-block"> Garage Owner </div>
             </div>

            <form>
            <div className="title">Workshop Info</div>
            <div className='main_input'>
               <label>Workshop Name</label>
               <input type='text' placeholder='Jessica Hayes'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Workshop Address</label>
               <input type='text' placeholder='Jessica Hayes'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <div className="title">Login Info</div>
           <div className='main_input'>
               <label>Owner Name</label>
               <input type='text' placeholder='Jessica Hayes'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Phone Number</label>
               <input type='number' placeholder='+1 (999) 278 589 2'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Email</label>
               <input type='email' placeholder='handel@example.com'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Password</label>
               <input type='password' placeholder='Type your password'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Confirm Password</label>
               <input type='password' placeholder='Type your password'/>
               <div className='mark'><FcCheckmark /></div> 
               

           </div>
            </form>
            


            <div className="action">
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                    <Link to='/login_process/confirmation'> <input className='dark_button' type='submit' value='Signup'/> </Link>
                    <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_login'><span className='blue'>LOGIN</span></Link> </div>
                 </div>

         </div>
        </>
    )
}
export default Owner_register