import React , {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Nav = ({Index=0})=>{
  const [activeIndex,setActiveIndex]=useState(Index)
  const links = [
    {
    name:'Home',
     link:'/'
    },
    {
      name:'About',
       link:'/about'
      },
      {
        name:'Blog',
         link:'/blog'
        },
        {
          name:'Contact-Us',
           link:'/contact'
        }

  ];

  const renderedLinks=links.map((link,index)=>{
    const  className = activeIndex === index ? 'active' : '';  
    return(
    <>
     <Link to= {link.link}>
                <span className={`option ${className} `} >
                 {link.name}
                </span>
                </Link>
    </>
    
    )

})
    return(
     <>
        <div className='navv'>
         <Row>
          <Col md={12}lg={3}>
            <img className='Land_logo' src='/images/cycle one/GarageWorkLogo.png' />
          </Col>
          <Col md={8} lg={7}>
           <div className='options'>
                {renderedLinks}
             
          
           </div>  
          </Col>
          <Col md={4} lg={2}>
           <div className='right'>
            <Link to='/login_choose'>
              <button className='dark_button'>Login</button>
            </Link>
           </div>
          </Col>
         </Row>

        </div>
    </>
    )
}
export default Nav