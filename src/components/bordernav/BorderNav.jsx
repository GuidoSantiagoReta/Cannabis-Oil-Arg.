import React from "react";
import "./BorderNav.css";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ScrollReveal from "scrollreveal";

const borderNav = {
  delay: 375,
  duration: 500,
  reset: true,
};

const BorderNav = () => {
  return (
    <div className="border-nav">
      <div className="border-links">
        <a href={""}>
          <BsWhatsapp />
        </a>
        <a href={""}>
          <BsInstagram />
        </a>
        <a href={""}>
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

ScrollReveal().reveal(".border-links", borderNav);
export default BorderNav;
