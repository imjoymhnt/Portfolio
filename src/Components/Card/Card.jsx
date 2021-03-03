import React from "react";

const Card = ({ image }) => (
  <div className="col-md-6 col-lg-4 mb-5">
    <div
      className="portfolio-item mx-auto"
      data-toggle="modal"
      data-target="#portfolioModal1"
    >
      <img className="img-fluid" src={image} alt="" />
    </div>
  </div>
);

export default Card;
