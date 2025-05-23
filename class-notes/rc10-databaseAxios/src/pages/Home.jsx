import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import BilgiList from '../components/BilgiList';
const Home = () => {

    const[tutorials,setTutorials]=useState([])


const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

//!GET (READ)

const getBilgiler=async()=>{

  const res=  await axios.get(url)

 console.log(res.data);

setTutorials(res.data)
}

useEffect(()=>{
getBilgiler();


},[])

//! DELETE
const deleteBilgi=async()=>{
  await axios.delete(`${url}${id}/`)

}




  return (
    <div>
<BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} />
<AddBilgi/>

    </div>
  )
}

export default Home