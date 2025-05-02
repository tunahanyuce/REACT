import React from "react";

import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright by FS-19 - {new Date().getFullYear()} </p>
    </div>
  );
};

export default Footer;
