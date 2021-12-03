import React from "react";
import "./about.css";

import about from "./about us.jpg";
import vision from "./vision.png";
function About() {
  return (
    <div>
      <section className="section">
        <div className="section-title">
          <h2>About Us </h2>
        </div>
        <article className="section-center about-center">
          <div className="image">
            <img src={about} alt="" className="photo" />
          </div>
          <div className="info">
            <h2>what we provide</h2>
            <p>
              We provide every aspect of Employee Management, Startup Business
              Solutions, Recruitments, Training & Development (Technical/Non
              Technical) Overall HR Services along with Business Project
              Management Solutions to help you start, scale and run your
              business successfully
            </p>
          </div>
        </article>

        <section className="section">
          <article className=" about-center">
            <div className="image">
              <img src={vision} alt="" className="photo" />
            </div>
            <div className="info">
              <h2>Our Vision</h2>
              <p>
                Incepted in 2019, with the vision to ease the various facets of
                Personnel Management & Business Solutions with a competent
                workforce, ensuring maximum benefit to every organisation. We
                have a qualified and experienced team to support all our
                professional activities. To redefine the whole startup hiring
                business in the best and competitive rates across the country
              </p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}

export default About;
