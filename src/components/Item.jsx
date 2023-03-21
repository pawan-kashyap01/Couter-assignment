import React from 'react'

const Item = (props) => {
  return (
    <li >{props.val}<span><button style ={{
        "border": "1px solid black",
        "color": "red",
        "padding": "5px 15px",
        "textAlign": "center",
        "display": "inline-block",
        "fontSize": "13px"
      }} onClick={(e)=>{props.handleDelete(e,props.ind)}}>Delete</button></span></li>
  )
}

export default Item
