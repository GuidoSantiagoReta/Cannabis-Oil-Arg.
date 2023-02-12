import React from "react";
import "./SectionImage3.css";
import aceite1 from "../../images/aceite1-filter.jpg";
import ScrollReveal from "scrollreveal";

const borderNav = {
  delay: 375,
  duration: 500,
  reset: true,
};

const SectionImage = () => {
  return (
    <section className="textos-section">
      <h1>Aceites medicinales 100% CBD </h1>
      <h2>100% CBD a base de uva y oliva</h2>

      <div className="section-image">
        <img src={aceite1} alt="" />
      </div>
    </section>
  );
};

ScrollReveal().reveal(".textos-section", borderNav);

export default SectionImage;
