

const SelectedSpareParts = ({part, removeSelected}) => {
  
    return (
        <tr className="spare_part">
            <th > {part.title}  </th>
            <th><input type='number' className="input" value={part.quantity} min='0' /> </th>
            <th> <button className="gray" onClick={()=>removeSelected(part)}>REMOVE</button> </th> 
       </tr>
    )
}

export default SelectedSpareParts
