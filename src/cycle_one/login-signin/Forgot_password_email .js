import { useState } from "react"
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import FlashMsg from "../workshops/components/FlashMsg"
const Forgot_password_email  = () => {
    const[flashmsg,setFlashmsg] = useState(true)
    return (
       <>
            
            <div className="login forget_password">
            {flashmsg&&<FlashMsg 
                            title="Still Under Development !"
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setFlashmsg}
                            icontype='info-icon'
                    />}
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
