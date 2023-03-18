import React from "react";

function Keyboard({ keys }) {
  return <div className="keys">
    {keys.map((key) => <span key={key.key} className={`key ${key.status}`}>{key.key}</span>)}
  </div>
}

export default Keyboard;
