import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
const Forgot_password_email  = () => {
    return (
       <>
            <div className="login forget_password">
                <div className="title">
                Please Enter Your Email To Receive The Code
                </div>
                <form>
                    <div className='main_input'>
                        <label>Email</label>
                        <input type='email' placeholder='handel@example.com'/>
                            <div className='mark'><FcCheckmark /></div> 
                        </div>
                        
                        <Link to='/login_process/resetcode'> <input className='dark_button' type='submit' value='Continue'/> </Link>
                       
                </form>



            </div>
        </>  
    )
}

export default Forgot_password_email 
