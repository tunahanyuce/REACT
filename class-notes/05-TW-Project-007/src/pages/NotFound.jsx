import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
    <h1>404</h1>
    <h2>Opps! Sayfa bulunamadi</h2>
    <p>Aradiginiz sayfa mevcut degil yada tasinmis olabilir</p>
    <link to="/" className="home-link">Anasayfaya Dön</link>
    </div>
  )
}

export default NotFound