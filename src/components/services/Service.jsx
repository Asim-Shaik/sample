import React from "react";
import "./service.css";
import image from "./hr-social-media.png";
function Service() {
  return (
    <section className="section services" id="services">
      <div className=" service-center">
        <article className="service-card">
          <span className="images">
            <img src={image} alt="service" className="service-img" />
          </span>
          <div className="infos">
            <h3> HR Social Media</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              veniam atque. Aut harum dolore inventore sed quam nostrum, aperiam
              asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate, maxime! <br />
              <button href="#" className="btn">
                read more
              </button>
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="images">
            <img src={image} alt="service" className="service-img" />
          </div>
          <div className="infos">
            <h3> HR Social Media</h3>
            <button href="#" className="btn">
              read more
            </button>
          </div>
        </article>
        <article className="service-card">
          <div className="images">
            <img src={image} alt="service" className="service-img" />
          </div>
          <div className="infos">
            <h3> HR Social Media</h3>
            <button href="#" className="btn">
              read more
            </button>
          </div>
        </article>
        <article className="service-card">
          <div className="images">
            <img src={image} alt="service" className="service-img" />
          </div>
          <div className="infos">
            <h3> HR Social Media</h3>
            <button href="#" className="btn">
              read more
            </button>
          </div>
        </article>
        <article className="service-card">
          <div className="images">
            <img src={image} alt="service" className="service-img" />
          </div>
          <div className="infos">
            <h3> HR Social Media</h3>
            <button href="#" className="btn">
              read more
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Service;
