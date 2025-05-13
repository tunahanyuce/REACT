import React from 'react'

import "./Header.scss"
import NBALogo from "../../assets/images/nba-logo.png"

const Header = ({setSearchPlayer}) => {
  return (
    <header>
        <img src={NBALogo} alt="" />
        <h1>NBA Legends</h1>
        <input type="search" placeholder='Search Player' onChange={(e)=>setSearchPlayer(e.target.value)}/>
    </header>
  )
}

export default Header