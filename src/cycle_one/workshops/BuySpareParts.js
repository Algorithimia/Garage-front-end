import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {FaSearch} from'react-icons/fa'



import SparePartInventory from "./SparePartsInventory"
import SelectedSparePart from "./SelectedSpareParts"
const BuySpareParts = ({businessName, businessType}) => {
    return (
        <div className="select_spareparts buy">
              <div className="first_row">
                <span className="title">BUY SPARE PARTS</span>
              </div>
              <div className="second-row">
                <Row>
                    <Col sm={6}md={8}>
                        <div className='search_div'>
                           <Link to='/workshop/owner/sparepartsgrage'> <input className="search"  type='search'  placeholder="Search Spare Parts"value ={businessName && businessName +'     '+ businessType}/></Link>
                            <div className='icon'><FaSearch /></div>
                        </div>
                    </Col>
                    <Col sm={6}md={4}>
                     <Link to='/workshop/owner/purchase/visa'>
                     <button className="button">PURCHASE ORDER</button>
                     </Link>   
                    </Col>
                </Row>     
              </div>
              <div className="tables-row">
             <Row>
               
                <Col sm={12} md={6}>
                    <div className='table_div'>
                        <div className="title">SPARE PARTS LIST</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th > QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SparePartInventory />
                        <SparePartInventory />
                        <SparePartInventory />
                        <SparePartInventory />
                        </table>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                <div className='table_div'>
                        <div className="title">SELECTED PARTS</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th> QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SelectedSparePart />
                        <SelectedSparePart />
                        <SelectedSparePart />
                       
                        <tr className="spare_part">
                            <th className="total" >TOTAL  </th>
                            <th className="price">156 $ </th>
                        </tr>
                        </table>
                    </div>
                </Col>
             </Row>
            </div>
              

               

        </div>
    )
}

export default BuySpareParts
