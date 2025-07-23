import React from "react";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center"
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where to find us</h2>
      <p className="mb-5 text-center">
        14434 LA-44, Gonzales, LA 70737 <br />{" "}
        <span style={{ fontWeight: "bold" }}>+1 (225) 622-8118</span>
      </p>
      <h3 className="text-capitalize">Opening hours</h3>
      <p className="m-0">Mon: 11:00AM – 7:30PM</p>
      <p className="m-0">Tue: 11:00AM – 7:30PM</p>
      <p className="m-0">Wed: 11:00AM – 7:30PM</p>
      <p className="m-0">Thu: 11:00AM – 7:30PM</p>
      <p className="m-0">Fri: 11:00AM – 7:30PM</p>
      <p className="m-0">Sat: 11:00AM – 3:00PM</p>
      <p className="m-0">Sun: Closed</p>
    </motion.div>
  );
}

export default ContactInfo;
