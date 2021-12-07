import Nav from "./Navbar"
import Car_care_center from "./Car_care_center"
import AutoRepair from "./AutoRepair"
import Services from "./Services"
import Grage_mange_invoices from "./Grage_mange_invoices"
import Footer from "./Footer"
const Landing_page=()=>{
    return(
        <div>
            <Nav />
            <Car_care_center />
            <AutoRepair />
            <Services />
            <Grage_mange_invoices />
            <Footer />
        </div>
    )
}
export default Landing_page