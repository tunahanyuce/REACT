import React, { useState } from 'react'

const AddPatient = ({hastalar, setHastalar,doctors}) => {

    console.log(doctors);
    
const[isim,setIsim]=useState("")
const[tarih,setTarih]=useState("")

const handleSubmit=(e)=>{

    e.preventDefault()

setHastalar([...hastalar,{
  id: hastalar.length+1,
  patientName:isim ,
  day:tarih ,
  isDone: false,
  myDoctor:doctors[0].doctorName ,
}]);


}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span style={{color:"red"}}>{doctors[0].doctorName} </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient