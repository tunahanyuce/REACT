import React from "react";
import gameLogo from "../assets/gamevere.png";
import "./GameNavbar.css"
import { Link } from 'react-router-dom';

const GameNavbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={gameLogo} alt="" />
          </div>
          {/* <a href="" className="nav-link">Home</a>
          <a href="" className="nav-link">Games</a>
          <a href="" className="nav-link">Contact</a>
          <a href="" className="nav-link">Developers</a>
          <a href="" className="nav-link">Github</a> */}

          <Link to="/"  className="nav-link">Home</Link>
          <Link to="/games"  className="nav-link">Games</Link>
          <Link to="/contact"  className="nav-link">Contact</Link>
          <Link to="/developers"  className="nav-link">Developers</Link>
        
          <a target="_blank" href="https://github.com/bobeff/open-source-games" className="nav-link">Github</a> 
          

        </div>
      </nav>
    </div>
  );
};

export default GameNavbar;
