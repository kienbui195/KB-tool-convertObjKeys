import React from "react";

const OneElement = ({label='', isChoose = false}) => {
  return (
    <div style={{padding: '4px', background: isChoose ? 'black' : 'white', color: isChoose ? 'white' : 'black', border: '1px solid black', cursor: 'pointer', userSelect: 'none'}}>
      {label}
    </div>
  )
}

export default OneElement