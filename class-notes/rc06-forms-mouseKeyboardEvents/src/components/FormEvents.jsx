import React, { useState } from 'react'

const FormEvents = () => {
const[name,setName]=useState("")
const[pass,setPass]=useState("")
const[date,setDate]=useState("")
const[country,setCountry]=useState("")


const gonder=(e)=>{
  e.preventDefault(); //? submit eventi'nin doğal davranışını engelle(beklet)
  // database e yolla
  //* ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
  //? axios.post(url, {name,password,country})

  alert(`isim:${name}
    password:${pass}
    tarih:${date}
    ülke:${country}
    `);

  //? eğer input değerlerini state'e bağlı olarak kontrol etmek istersek inputların value proplarına state'leri bağlamamız gerekir. bu duruma kontrolsüz komponentten kontrollü komponente çevirme denir.
  setName("");
  setPass("");
  setDate("");
  setCountry("");
}

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={gonder}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{name} </span>
          </label>
          <input
            //? onChange eventi input değeri her değiştiğinde tetiklenir. Biz de yazdığımız event handler aracılığı ile state'i güncelleyebiliriz.
          onChange={(e)=>setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
      value={name}
            //* required alanların çalışması için formları onSubmit ile göndermeliyiz. onClick ile gönderdiğimizde çalışmaz
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{pass} </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
         onChange={(e)=>setPass(e.target.value)}
         value={pass}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date: <span className="text-danger">{date} </span>
          </label>
          <input
          
            type="datetime-local"
            className="form-control"
            id="date"
          onChange={(e)=>setDate(e.target.value)}
          value={date}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{country} </span>
          </label>
          <select
            id="country"
            className="form-select"
            required
           onChange={(e)=>setCountry(e.target.value)}
           value={country}
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
      
        {/* //! form içerisindeki buttonların type'ı default olarak submittir */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormEvents