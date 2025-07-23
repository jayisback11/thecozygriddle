import React from "react";
import "./ContactSection.css";
import { motion } from "framer-motion";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactSectionImg from "../../utils/images/contact-section-img.jpg";

function ContactSection() {
  return (
    <div className="contact-section text-light py-5 shadow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-cneter justify-content-center mb-5 mb-lg-0">
            <ContactInfo />
          </div>
          <motion.div
            className="col-lg-6 d-flex justify-content-center"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            
            <img
              src={
                "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq9asRKlkjn55w0l914m44SnbqLVWTPiQEI16LW1fSm61M5jbpBaZIikLjwWJaw1rlanNAe4OrqMEsUNV9Rv7DDrF72oau4qo7kBVvcn7_9ryHPlEYgXLFySfoj2yffpaiPKuTNHA=w408-h306-k-no"
              }
              className="img-fluid"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
