import { Row, Col,Container } from 'react-bootstrap';
import Service_Card from './Service_card';
const Services=() =>{
    return(
        <>
         <div className='services'>
             <Container>
                <span className='title'>Services</span>
                 <Row>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_1.png" logo_background='#FFFFFF' backgroundColor='#FECA29' color='#FFFFFF' />
                     </Col>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_2.png" logo_background='#FECA296E' backgroundColor='#FFFFFF' color='#969B85' />
                     </Col>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_3.png" logo_background='#05876D7A' backgroundColor='#FFFFFF' color='#969B85'/>
                     </Col>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_4.png" logo_background='#C6DBB2' backgroundColor='#FFFFFF' color='#969B85'/>
                     </Col>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_5.png" logo_background='#FECA296E' backgroundColor='#FFFFFF' color='#969B85'/>
                     </Col>
                     <Col sm={4}>
                        <Service_Card image_url="images/cycle one/service_icons/icon_6.png" logo_background='#05876D7A' backgroundColor='#FFFFFF' color='#969B85'/>
                     </Col>
                 </Row>
             </Container>
            
         </div>
        </>
    )
}
export default Services