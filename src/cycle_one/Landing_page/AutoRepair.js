import { Row, Col,Container } from 'react-bootstrap';

const AutoRepair =()=>{
return(
    <>
     <div className="auto_repair">
      <Container>
      <Row>
          <Col>
           <div className='auto-mechanic-checking-car'>

           </div>
            
          </Col>
          <Col>
           
           <div className='info'>
               <span className='title'>Auto Repair &#38; Garage Management</span>
               <p>
               Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.
               </p>
               <div className='stores'>
                   <Row>
                    <Col>
                   <div className='store'>
                     <img src="images/cycle one/Rectangle_76.png" />
                     <div className='inline_text'>
                        <span>Get It On</span> <br/>
                        <span className='store_name'>PLAY STORE</span>
                     </div>   
                   </div>
                   </Col>
                   <Col>
                    <div className='store'>
                    <img src="images/cycle one/Icon awesome-apple.svg" />
                    <div className='inline_text'>
                    <span>Get It On</span> <br/>
                    <span className='store_name'>APP STORE</span>
                    </div>
                    </div>
                    </Col>
                    </Row>
               </div>


           </div>
          </Col>
      </Row>
     </Container>
     </div>
    </>
)
}
export default AutoRepair