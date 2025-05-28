import React, { useState } from 'react'
import Home from "./components/Home";
import { createContext } from 'react';
import data from "./data"

//! 1- context alanı create ettik
   export const StudentContext = createContext()

const App = () => {
const [students, setStudents]=useState(data)
const changeColor=(newId,newRenk)=>{
  setStudents(students.map((i)=>i.id==newId? {...i,color:newRenk}:i))

}
  return (
    //! 2- bütün projeye gönderilmek üzere ilk Home u, gönderilecek elemanlar ve Context sayfasıyla sarmallayalım (provide edelim)
    <StudentContext.Provider value={{students,changeColor}}>
      <Home/>
    </StudentContext.Provider>

  )
}

export default App