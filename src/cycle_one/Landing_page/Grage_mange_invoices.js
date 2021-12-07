import { Row, Col,Container } from 'react-bootstrap';
import Grage_option from './Grage_option';
const Grage_mange_invoices=()=>{
    return(
        <>
         <div className="grage_mange_invoices">
            <Container>
                <Row>
                    <Col><Grage_option
                     title={'Garage Management'}
                     p={'Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.'}
                     /> </Col>
                    <Col><Grage_option 
                     title={'Garage Invoices'}
                     p={'Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.'}
                    /> </Col>

                 
                </Row>
            </Container>
     
         </div>
        </>
    )
}
export default Grage_mange_invoices