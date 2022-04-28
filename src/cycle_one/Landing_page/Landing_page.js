import React,{useState} from 'react'
import Nav from "./Navbar"
import Car_care_center from "./Car_care_center"
import AutoRepair from "./AutoRepair"
import Services from "./Services"
import Grage_mange_invoices from "./Grage_mange_invoices"
import Footer from "./Footer"
import FlashMsg from "../workshops/components/FlashMsg"
const Landing_page=()=>{
    const[flashmsg,setFlashmsg] = useState(false)
    const setFlashScroll=(value)=>{
        setFlashmsg(value)
        // window.scrollTo(0, 0);
    }
    const msg=flashmsg && <FlashMsg 
        title="Still Under Development !"
        img={'/images/msgIcons/info.svg'}
        setFlashmsg={setFlashmsg}
        icontype='info-icon'
        />
    return(
        <div>
          
            <Nav />
          
            <Car_care_center  msg={msg} />
            <AutoRepair />
            <Services />
            <Grage_mange_invoices />
            <Footer setFlashmsg={setFlashScroll}/>
        </div>
    )
}
export default Landing_page