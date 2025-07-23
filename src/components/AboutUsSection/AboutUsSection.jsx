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
              "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            At Nick’s, we don’t just make food—we craft crave-worthy
            experiences. Our pizzas are made from scratch with fresh dough, rich
            tomato sauce, and the perfect blend of gooey, golden cheeses. Every
            topping is sliced fresh daily, and every pie is baked to perfection.
          </p>
          <p className="mb-4 mb-lg-5">
            Sink your teeth into our overstuffed subs—hot, melty, and made just
            the way you like it. From classic Italian combos to bold, meaty
            favorites, each bite is packed with flavor and attitude.
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
