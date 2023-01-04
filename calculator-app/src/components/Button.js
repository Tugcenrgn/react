import React from 'react';
import "./Button.css";

function Button({symbol,color,handleClick}) {
  return (
      <div
         onClick={()=> handleClick(symbol)} 
          className="but-wrap" style={{ backgroundColor: color }}>{symbol}</div>
  )
}

export default Button