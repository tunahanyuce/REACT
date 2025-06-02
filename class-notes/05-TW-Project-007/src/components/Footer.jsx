import React from 'react'

const Footer = ({position}) => {
  return (
    <footer className={position}>
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="#"><i className="fab fa-github fa-2x"></i></a>
      </div>
      <div className="copyright">&copy; Copyright 2025</div>
    </footer>
  );
};

export default Footer