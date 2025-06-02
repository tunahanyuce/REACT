import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet ,useLocation} from 'react-router-dom'
const Layout = () => {
    const location = useLocation()
    const horizontalPaths = ["/", "/contact"]
    const position = horizontalPaths.includes(location.pathname)? "horizontal":"vertical"
    return (<div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer position = {position}/>
    </div>
  )
}

export default Layout