import React from "react";
import "./Nav.css";
import icon2 from "../../images/icon2.png";
import ScrollReveal from "scrollreveal";
const borderNav = {
  delay: 375,
  duration: 500,
  reset: true,
};

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="logo-nav">
          <img src={icon2} alt="cannabis-oil" />
          <h1>
            Cannabis Oil <span className="punto-title">Arg</span>.
          </h1>
        </div>
      </nav>
    </header>
  );
};
ScrollReveal().reveal(".logo-nav", borderNav);
export default Nav;
