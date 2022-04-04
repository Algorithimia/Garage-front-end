import React from 'react'

const SearchList = ({data, customer}) => {
    {console.log(data)}
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (customer === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.customer.name.toLowerCase().includes(customer)
        }
    })
  return (
    <ul>
    {filteredData.map((item) => (
        <li key={item.id}> order remarks : {item.order_remark}  &nbsp;name :  {item.customer.name}</li>
    ))}
</ul>
  )
}

export default SearchList