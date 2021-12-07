
import { Row, Col,Container } from 'react-bootstrap';
const Service_Card =({image_url,logo_background,backgroundColor,color}) =>{
    return(
        <>
         <div className='service' style={{backgroundColor:backgroundColor}}>
           <Container >
            <div className="image" style={{backgroundColor:logo_background}}>
                <img src={image_url} />
            </div>
            <h5>Sed a magna semper, </h5>
            <p style={{color:color}}>Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur </p>    
               
           </Container> 
                
         </div>
        </>
    )
}
export default Service_Card