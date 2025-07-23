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
              Step into Nick's and experience the perfect mix of comfort food
              and bold flavor. Our hand-tossed pizzas come out of the oven
              golden and bubbling, loaded with premium toppings and our
              signature sauce. Whether you're craving a classic pepperoni or a
              fully loaded supreme, every bite hits just right.
            </p>
            <p>
              Not in the mood for pizza? Our toasted subs are stacked high with
              freshly sliced meats, melty cheese, and zesty house-made
              sauces—all wrapped in warm, crusty bread that makes every sandwich
              unforgettable.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn  btn-lg rounded-0 text-capitalize mt-3 shadow"
                style={{ backgroundColor: "#b64a41ff", color: "white" }}
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
            <img src={AboutChef1Img} className="img-fluid" alt="our staff" />
          </motion.div>
        </div>
      </div>

      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
}

export default About;
