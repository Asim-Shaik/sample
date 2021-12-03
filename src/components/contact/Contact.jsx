import React from "react";
import "./contact.css";
function Contact() {
  const handleSubmit = () => {};
  return (
    <section className="section c" id="contact">
      <div className="section-center">
        <div className="control">
          <div className="contact-title">
            <h3>feel free to contact us</h3>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="email" placeholder="email" className=" i" />
            <input type="text" placeholder="phone number" className=" i" />
            <input type="textbox" placeholder="description" className=" i" />
            <button className=" b" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
