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
        30234 Walker North Rd, Walker, LA 70785 <br />{" "}
        <span style={{ fontWeight: "bold" }}>+1 (225) 931-4662</span>
      </p>
      <h3 className="text-capitalize">Opening hours</h3>
      <p className="m-0">Mon: 5:45AM – 2:00PM</p>
      <p className="m-0">Tue: Closed</p>
      <p className="m-0">Wed: 5:45AM – 2:00PM</p>
      <p className="m-0">Thu: 5:45AM – 2:00PM</p>
      <p className="m-0">Fri: 5:45AM – 2:00PM</p>
      <p className="m-0">Sat: 5:45AM – 2:00PM</p>
      <p className="m-0">Sun: Closed</p>
    </motion.div>
  );
}

export default ContactInfo;
