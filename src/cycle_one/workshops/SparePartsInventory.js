
const SparePartsInventory = ({sparepart, setSelectedSpareParts, selectedSpareParts}) => {
    return (
     
        <tr className="spare_part">
        <th > {sparepart.title}  </th>
        <th><input type='number' className="input" min='0' /> </th>
        <th> <button className="blue" onClick={()=>setSelectedSpareParts([...selectedSpareParts,{ id: sparepart.id, title:sparepart.title}])}>Add</button> </th>
      
       </tr>
    )
}

export default SparePartsInventory
