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
        9997 Florida Blvd, Walker, LA 70785 <br />{" "}
        <span style={{ fontWeight: "bold" }}>+1 (225) 667-8484</span>
      </p>
      
      <h3 className="text-capitalize">Opening hours</h3>
      <p className="m-0">Mon: 4:30AM – 11:00AM</p>
      <p className="m-0">Tue: 4:30AM – 11:00AM</p>
      <p className="m-0">Wed: 4:30AM – 11:00AM</p>
      <p className="m-0">Thu: 4:30AM – 11:00AM</p>
      <p className="m-0">Fri: 4:30AM – 11:00AM</p>
      <p className="m-0">Sat: 4:30AM – 12:00AM</p>
      <p className="m-0">Sun: 4:30AM – 12:00AM</p>
    </motion.div>
  );
}

export default ContactInfo;
