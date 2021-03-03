import React from "react";

const About = () => (
  <section class="page-section bg-primary text-white mb-0" id="about">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-white">
        About
      </h2>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum,
            ipsa beatae ducimus autem at. Facilis exercitationem quae quaerat
            commodi unde corrupti quas deserunt, quos nulla magni alias laborum
            voluptate?
          </p>
        </div>
        <div class="col-lg-4 mr-auto">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            debitis nisi doloribus delectus veritatis aliquid voluptate quos
            reprehenderit totam maxime!
          </p>
        </div>
      </div>
      <div class="text-center mt-4">
        <a
          class="btn btn-xl btn-outline-light"
          href="https://drive.google.com/file/d/1px9NrIO9vDmpBe0QyGcwhDJNK5_XTJQ0/view?usp=sharing"
        >
          <i class="fas fa-download mr-2"></i>
          Resume
        </a>
      </div>
    </div>
  </section>
);

export default About;
