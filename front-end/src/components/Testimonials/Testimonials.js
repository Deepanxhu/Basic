import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { urlFor, client } from "../../client";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"][0...3]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our Students say ?</h2>

        <div className="content-container">
          {testimonials.map((testimonials) => (
            <div className="testimonial">
              <img src={urlFor(testimonials.image)} alt="" />
              <div className="reviewer-details">
                <div className="name">{testimonials.name}</div>
                <div className="company-name">{testimonials.company}</div>
                <div className="review">{testimonials.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
