import React, { useContext } from 'react'
import Header from './../components/Header';
import { RecipeContext } from '../context/RecipeProvider';


const Home = () => {
      const {toggleDarkMode,darkMode}=useContext(RecipeContext)
  return (
   
       <div className={darkMode ? "dark" : ""}>
      <div
       className={`transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-slate-800"}`}
      >
        <Header/>

        <p>
          FOODS
        </p>

        </div>
    </div>
  )
}

export default Home