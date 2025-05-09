import React, { useState } from 'react'

const FormObject = () => {
    const[bilgi,setBilgi]=useState({name:"", password:"", country: ""});

    const{name,sappword,country}=bilgi
  return (
     <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{} </span>
          </label>
          <input
          onChange={(e)=>setBilgi()}

            type="text"
            className="form-control"
            id="name"
          
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{} </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{} </span>
          </label>
          <select id="country" className="form-select" required>
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>

       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
   
  )
}

export default FormObject