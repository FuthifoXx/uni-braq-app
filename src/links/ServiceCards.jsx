import React from 'react';
import { services } from '../data';
function ServiceCards() {
  return (
    <div className="section-center featured-center">
      {services.map((service) => {
        const { id, image, title, info } = service;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="school uniform" />
              {/* <p className="tour-date">august 26th, 2020</p> */}
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ServiceCards;
