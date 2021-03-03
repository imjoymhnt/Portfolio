import React from "react";

const Footer = () => (
  <div>
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a
              class="btn btn-outline-light btn-social mx-1"
              target="_blank"
              href="https://www.facebook.com/joy.mahanta.3"
            >
              <i class="fab fa-fw fa-facebook-f"></i>
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              target="_blank"
              href="https://twitter.com/MritunjoyMahan1"
            >
              <i class="fab fa-fw fa-twitter"></i>
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              target="_blank"
              href="nkedin.com/in/mritunjoy-mahanta-63692713a/"
            >
              <i class="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              target="_blank"
              href="https://github.com/imjoymhnt"
            >
              <i class="fab fa-fw fa-github"></i>
            </a>
          </div>
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by
              <a href="#"> imjoymhnt</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright © Your Website 2020</small>
      </div>
    </div>
  </div>
);

export default Footer;
