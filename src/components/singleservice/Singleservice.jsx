import React from "react";
import "./singleservice.css";
import image from "./hr-social-media.png";
function Singleservice() {
  const handleclick = () => {};
  return (
    <section className="section">
      <div className="single-center">
        <div className="card-container">
          <span>
            back to page
            <i class="fab fa-affiliatetheme icon" onClick={handleclick}></i>
          </span>
          <div className="picture">
            <img src={image} alt="" className="single-img" />
          </div>
          <div classname="card-container">
            <div className="single-title">
              <h1>HR social Media</h1>
            </div>
            <div className="single-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              ut, corrupti at quod suscipit eum magni id illo nulla sequi, sint
              est voluptatem a officiis nam minima adipisci libero laboriosam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis quod, ullam, incidunt inventore laboriosam sapiente
              laborum quae vitae laudantium eos numquam voluptatibus. Sunt
              similique, aperiam facilis quaerat aspernatur qui modi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quidem a
              recusandae officia nam, animi dolorum quaerat iure eius ipsum aut.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Singleservice;
