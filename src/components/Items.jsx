import React from 'react'

const Items = ({getItems, handleDelete}) => {
    const itemsList = getItems;
  return (
    <div>
    <ol>
      {itemsList.map((val,i) => (
         val !== undefined &&
        <li >{val}<span><button style ={{
            "border": "1px solid black",
            "color": "red",
            "padding": "5px 15px",
            "textAlign": "center",
            "display": "inline-block",
            "fontSize": "13px"
          }} onClick={(e)=>{handleDelete(e,i)}}>Delete</button></span>
          </li>
      ))}
    </ol>
    </div>
  )
}

export default Items
