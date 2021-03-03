import React from "react";
import Card from "../Card/Card";

const Portfolio = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        Portfolio
      </h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="row justify-content-center">
        <Card image="https://bit.ly/3qjRwnL" />
        <Card image="https://bit.ly/3bRrP8G" />
        <Card image="https://bit.ly/2O008CB" />
        <Card image="https://bit.ly/3b8194u" />
        <Card image="https://bit.ly/2PtMdoV" />
        <Card image="https://bit.ly/2Ohf8fc" />
      </div>
    </div>
  </section>
);

export default Portfolio;
