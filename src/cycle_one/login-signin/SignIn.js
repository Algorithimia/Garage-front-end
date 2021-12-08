import { Row, Col,Container } from 'react-bootstrap';
import Login_type from "./Login_type"
const Signin=()=>{
    return(
    <>
     <div className='log-sign'>
     <Container>
          <Row>
              <Col>
               <Login_type />
               </Col>
                <Col>
                 <Login_type />
                </Col> 
          </Row>
      </Container>
     </div>
    </> 
    )
}
export default Signin