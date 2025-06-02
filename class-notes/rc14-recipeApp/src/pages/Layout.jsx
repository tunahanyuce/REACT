import React from 'react'
import RecipeNavbar from 
  import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <RecipeNavbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout