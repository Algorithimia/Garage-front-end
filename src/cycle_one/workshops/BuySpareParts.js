import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {FaSearch} from'react-icons/fa'
import SparePartsInventory from "./SparePartsInventory" 
import SelectedSparePart from "./SelectedSpareParts"
import SparePartBuy from "./SparePartBuy"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { getSpareParts} from '../../store/store slices/InventorySice'

const BuySpareParts = ({businessName, businessType}) => {
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const [selectedSpareParts,setSelectedSpareParts]=useState([])
    const {spareParts , isLoading, error}= useSelector((state)=>state.inventory)
    useEffect(() =>{
        dispatch(getSpareParts());
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
           
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
      
       
    
      },[dispatch])
    let  part={
        "id": 7,
        "title": "new",
        "description": "Des ..",
        "type": {
            "id": 1,
            "title": "we"
        },
        "unit_price": 5,
        "quantity": 9,
        "status": "Active",
        "is_available": true,
        "is_purchase": false,
        "created_at": "2022-03-29 09:47:41",
        "updated_at": "2022-03-29 09:54:28",
        "galleries": [
            {
                "id": 11,
                "priority": 212,
                "image": "/media/spare_parts/1027207_9d4bCPD.png"
            },
            {
                "id": 13,
                "priority": 23,
                "image": "/media/spare_parts/ikea1_BkdDUCj.png"
            },
            {
                "id": 12,
                "priority": 0,
                "image": "/media/spare_parts/ss.png"
            },
            {
                "id": 14,
                "priority": 0,
                "image": "/media/spare_parts/ss_vCdfCBj.png"
            }
        ]
    }
    const addToSelectedList=(sparepart,quantity)=>{
     
        let  selectedSparePartExistIndex = selectedSpareParts.findIndex(part => part.id == sparepart.id)
        let  oldQuantity =selectedSparePartExistIndex !== -1 && selectedSpareParts.find(part => part.id == sparepart.id).quantity
       
        console.log('old quantity',oldQuantity)
        if (selectedSparePartExistIndex !== -1) 
        {
             const newArray = [...selectedSpareParts];
            console.log(newArray) 
           
          newArray[selectedSparePartExistIndex] =  {id: sparepart.id, title:sparepart.title, quantity:parseInt(quantity)+parseInt(oldQuantity)}
          console.log(newArray)
            setSelectedSpareParts(newArray)
            console.log(selectedSparePartExistIndex)
        
         
        }
        else{   
        setSelectedSpareParts([...selectedSpareParts,{ id: sparepart.id, title:sparepart.title, quantity:quantity}])
        }

      }
      // remove spare part from selected list 
      let removeSelected=(sparepart)=>{
        setSelectedSpareParts(selectedSpareParts.filter((part)=>part.id != sparepart.id))
    }
    let renderedSpareParts = isLoading ? <img className="loading" src="/images/giphy.gif" /> : spareParts.map(sparePart=>  <SparePartsInventory key={sparePart.id} sparepart={sparePart} setSelectedSpareParts={addToSelectedList} selectedSpareParts={selectedSpareParts}/>)
    let renderedSelectedSpareParts = selectedSpareParts.map((part)=><SelectedSparePart  part={part} removeSelected={removeSelected} />)
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
                        {renderedSpareParts}
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
                        {renderedSelectedSpareParts}
                       
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
