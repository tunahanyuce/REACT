import React from "react";
import gameLogo from "../assets/gamevere.png";
import "./GameNavbar.css"

const GameNavbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={gameLogo} alt="" />
          </div>
          <a href="" className="nav-link">Home</a>
          <a href="" className="nav-link">Games</a>
          <a href="" className="nav-link">Contact</a>
          <a href="" className="nav-link">Developers</a>
          <a href="" className="nav-link">Github</a>
        </div>
      </nav>
    </div>
  );
};

export default GameNavbar;
