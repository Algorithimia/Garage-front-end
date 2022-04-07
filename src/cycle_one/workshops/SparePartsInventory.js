import { useState } from "react"

const SparePartsInventory = ({sparepart, setSelectedSpareParts}) => {
    const [quantity,setQuantity] = useState(1)
    return (
     
        <tr className="spare_part">
        <th > {sparepart.title}  </th>
        <th><input type='number' className="input" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min='0' /> </th>
        <th> <button className="blue" onClick={()=>setSelectedSpareParts(sparepart,quantity)}>Add</button> </th>
      
       </tr>
    )
}

export default SparePartsInventory
