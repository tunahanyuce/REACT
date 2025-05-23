import React from 'react'
import GameNavbar from './../components/GameNavbar';
import Slider from './../components/Slider';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <GameNavbar/>
        <Slider/>
        <main className='bg-dark text-white'>
          <Outlet/>
        </main>

        <footer>
            Merhaba
        </footer>

    </div>
  )
}

export default Layout
//!approuterde gözükmesini istediğim seyi sayfada nerede gözükmesini istiyorsak layoutta o bölgeye eklemeliyiz