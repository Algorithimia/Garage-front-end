

const SelectedSpareParts = ({part}) => {
    return (
        <tr className="spare_part">
            <th > {part.title}  </th>
            <th><input type='number' className="input"  min='0' /> </th>
            <th> <button className="gray">REMOVE</button> </th> 
       </tr>
    )
}

export default SelectedSpareParts
