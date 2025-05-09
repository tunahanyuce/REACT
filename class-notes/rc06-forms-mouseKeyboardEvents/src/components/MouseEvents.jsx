import React, { useState } from 'react'
//* Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir.sadece o noktayı algılar değişmez

//* Mouseenter olayı yalnızca fare işaretçisi div öğesine tıklandığında tetiklenir.

//* Onmousemove olayı, fare işaretçisi div öğesinin üzerinde her hareket ettiğinde tetiklenir.
const MouseEvents = () => {
const[show,setShow]=useState(false)


  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
      onMouseOver={()=>setShow(true)}
onMouseLeave={()=>setShow(false)}

       id="todo-1" className="bg-success text-light w-50 p-4">
        onMouseOver & onMouseLeave
      </div>
      {/* Conditional Rendering-ve ternary jsx alanının izin verdiği conditionlar */}
      <p> {show==true && <span>For detail ....</span>} </p>
      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseMove</span>
      </div>
      <div id="todo-5" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseEnter</span>
      </div>
      X: {} and Y:{}
    </div>
  );
}

export default MouseEvents