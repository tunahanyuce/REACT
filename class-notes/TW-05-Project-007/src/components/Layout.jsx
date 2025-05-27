import React from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from './Navbar'
const horizontalPaths = ["/","/contact"]
const position = horizontalPaths.includes(location.pathname) ? "horizontal": "vertical"

const Layout = () => {
    const location =useLocation()
  return (
    <div>
    <Navbar>
        <main>
            
        </main>
    </Navbar>

    </div>
  )
}

export default Layout