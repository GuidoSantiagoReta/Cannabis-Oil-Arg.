import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="content-footer">
          <h4>Teléfono</h4>
          <p>11-23238258</p>
        </div>
        <div className="content-footer">
          <h4>Email</h4>
          <p>cannabisoilarg@gmail.com</p>
        </div>
        <div className="content-footer">
          <h4>Redes</h4>
          <p>Instagram Facebook Twitter</p>
        </div>
      </div>
      <h2 className="last-title">
        {" "}
        Developed  by Guido Santiago Reta| SwareGrap &copy; 2023
      </h2>
    </footer>
  );
};

export default Footer;
