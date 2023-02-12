import React from "react";
import aceite4 from "../../images/aceite4.jpg";
import aceite3 from "../../images/aceite3.jpg";
import aceite6 from "../../images/aceite6.jpg";
import "./Section4.css";
import ScrollReveal from "scrollreveal";

const borderNav = {
  delay: 375,
  duration: 500,
  reset: true,
};

const SectionOil = () => {
  return (
    <section className="about-oil">
      <div className="container">
        <h2 className="title">Productos</h2>
        <div className="product-container">
          <div className="individual-product">
            <img src={aceite3} alt="aceite 10ml" />
            <h3>CBD 10 ml</h3>
            <p>Aceite Sublingual 10% Premium</p>
          </div>

          <div className="individual-product">
            <img src={aceite4} alt="aceite 20ml" />
            <h3>CBD 20 ml</h3>
            <p>Aceite Sublingual 20% Premium</p>
          </div>

          <div className="individual-product">
            <img src={aceite6} alt="aceite 30ml" />
            <h3>CBD 30 ml</h3>
            <p>Aceite Sublingual 30% Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};
ScrollReveal().reveal(".about-oil", borderNav);
export default SectionOil;
