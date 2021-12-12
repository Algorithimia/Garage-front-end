import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


const Reset_password = () => {
    return (
        <>
            <div className="login reset">
                <div className="title">Forgot Your Password !</div>
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
                    <Link to='/login_process/resetcode'>
                         <input className='dark_button' type='submit' value='Continue'/>  
                    </Link>
                </form>
                <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_sign_in'><span className='blue'>SIGNUP</span></Link> </div>
            </div>
        </> 
    )
}

export default Reset_password
