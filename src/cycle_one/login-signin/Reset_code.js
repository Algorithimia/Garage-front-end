import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";

const Reset_code = () => {
    return (
        <>
            <div className="login reset_code">
               <div className="title">Please Enter The Confirmation Code Sent To Your Email </div>
               <form>
                    <div className='main_input'>
                            <label>Confirmation Code</label>
                            <input  placeholder='6 digit numbers'/>
                            <div className='mark'><FcCheckmark /></div>    
                        </div>
                        <div className="timer">
                            <span className="blue">Resend</span> 02 : 48
                        </div>
                        <div className="action">
                        <input className='dark_button' type='submit' value='Continue'/>
                        <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_sign_in'><span className='blue'>SIGNUP</span></Link> </div>
                        </div>
                 </form>

            </div>
        </>
    )
}

export default Reset_code
