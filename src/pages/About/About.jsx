import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutChef1Img from "../../utils/images/about-chef1-img.jpg";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Reviews from "../../components/Reviews/Reviews";

function About() {
  return (
    <div className="about-page">
      <header className="height-50 mt-5">
        <motion.div
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-light">About</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <motion.div
            className="col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              At Sam’s Donut, we keep it fresh, fluffy, and full of flavor.
              Every morning, we handcraft our donuts with care and serve them
              with a smile. Whether you’re grabbing a quick bite or treating the
              whole office, we’ve got the perfect donut for every craving.
            </p>
            <p>Local love. Fresh donuts. Every day.</p>
            <Link to="/contact">
              <button
                type="button"
                className="btn  btn-lg rounded-0 text-capitalize mt-3 shadow"
                style={{ backgroundColor: "#205f99ff", color: "white" }}
              >
                Contact us
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={"https://s3-media0.fl.yelpcdn.com/bphoto/M6A9lBkSyvwfkF_2cXV0pg/o.jpg"} className="img-fluid" alt="our staff" />
          </motion.div>
        </div>
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
}

export default About;
