import React from "react";
import "./AboutUsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutSectionImg from "../../utils/images/about-section-img.jpg";

function AboutUsSection() {
  return (
    <div className="container my-5">
      <div className="flex-column-reverse flex-lg-row row">
        <motion.div
          className="col-lg-6 d-flex justify-content-center"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fHww"
            }
            className="about-section-img img-fluid mt-5 mt-lg-0 shadow"
            alt="about us"
          />
        </motion.div>
        <motion.div
          className="col-lg-6 d-flex flex-column justify-content-center"
          initial={{ opacity: 0, x: 350 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-uppercase fw-bold fs-1 mb-4 mb-lg-5">About us</h2>
          <p>
            Authentic Southern po’boys, loaded with flavor, fried to perfection,
            and always served on that perfect New Orleans bread.
          </p>
          <p className="mb-4 mb-lg-5">
            Serving up New Orleans classics—crispy, saucy, stacked, and
            unforgettable.
          </p>
          <Link to="/about">
            <button
              type="button"
              className="btn btn-dark btn-lg rounded-0 text-capitalize shadow"
            >
              More about us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsSection;
