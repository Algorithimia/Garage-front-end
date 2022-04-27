import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import FlashMsg from "../workshops/components/FlashMsg"


const Reset_password = () => {
    const[flashmsg,setFlashmsg] = useState(true)
    return (
        <>

            <div className="login reset">
                
                <div className="title">Forgot Your Password !</div>
                {flashmsg&&<FlashMsg 
                            title="Still Under Development !"
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setFlashmsg}
                            icontype='info-icon'
                    />}
                <div className="p">Reset Your Password By Email Or By Phone Number ?</div>
                <form >
               
                    <div className="send_mail_types">
                    <Row>
                        <Col sm={6}>
                          <input checked type='radio' name='confirmation_type' />
                          <label>Email</label>
                        </Col>
                         <Col  sm={6}>
                          <input type='radio' name='confirmation_type' />
                          <label>Mobile Number</label>
                        </Col>
                        <Col> 
                         
                        </Col>
                    </Row>
                    </div>
                    <Link to='/login_process/forget'>
                         <input className='dark_button' type='submit' value='Continue'/>  
                    </Link>
                </form>
            
            </div>
        </> 
    )
}

export default Reset_password
