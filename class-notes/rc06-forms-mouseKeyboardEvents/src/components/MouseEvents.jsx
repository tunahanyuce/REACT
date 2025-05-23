import React, { useState } from 'react'
//* Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir.sadece o noktayı algılar değişmez

//* Mouseenter olayı yalnızca fare işaretçisi div öğesine tıklandığında tetiklenir.

//* Onmousemove olayı, fare işaretçisi div öğesinin üzerinde her hareket ettiğinde tetiklenir.
const MouseEvents = () => {
const[show,setShow]=useState(false)
const[koordX,setKoortX]=useState(0)
const[koordY,setKoortY]=useState(0)

const fareOlayi=(e)=>{

//! pageX/Ykoordinatlar, oluşturulan sayfanın tamamının sol üst köşesine göredir (kaydırılarak gizlenen parçalar dahil),

//! clientX/YKoordinatlar sayfanın görünen kısmının sol üst köşesine göredir ve tarayıcı penceresinden "görünür" .
//! screenX/Yfiziksel ekrana göredir.

    setKoortX(e.pageX)
    setKoortY(e.pageY)

}
const klavyeOlayi=(e)=>{
    if(e.keyCode>=48 && e.keyCode<=57){
        alert("tebrikler rakama bastınız")
    }
    
}

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
      <div 
      onMouseMove={fareOlayi}

      id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseMove</span>
      </div>





      <div id="todo-5" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseEnter</span>
      </div>
      X: {koordX} and Y:{koordY}


      <div>
        <h1>KLAVYE OLAYI</h1>
        <input type="text" className='form-control' 

        onKeyDown={klavyeOlayi}





        />
      </div>
    </div>
  );
}

export default MouseEvents