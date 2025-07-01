import React from 'react';
import Title from './Title';
import ServiceCards from '../links/ServiceCards';

function Service() {
  return (
    <section className="section" id="services">
      <Title title="our" subTitle="service" />
      <ServiceCards />
    </section>
  );
}

export default Service;
