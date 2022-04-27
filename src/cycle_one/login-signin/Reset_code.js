import { useState } from "react"
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import FlashMsg from "../workshops/components/FlashMsg"
const Reset_code = () => {
    const[flashmsg,setFlashmsg] = useState(true)
    return (
        <>
            <div className="login reset_code">
                 {flashmsg&&<FlashMsg 
                            title="Still Under Development !"
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setFlashmsg}
                            icontype='info-icon'
                    />}
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
                         <Link to='/login_process/resetpassword'>  
                            <input className='dark_button' type='submit' value='Continue'/>
                        </Link>  
                       
                        </div>
                 </form>

            </div>
        </>
    )
}

export default Reset_code
