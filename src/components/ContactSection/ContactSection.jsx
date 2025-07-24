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
                "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/486835878_1205226551607363_1825809981692205237_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-UFQUoCsvLoQ7kNvwHVTmYo&_nc_oc=AdkEt_trhLdfGu5JKI5Jw31em85mpUF5sC-dSdXlWMU6sqKTWt58D8Kos_S7REdX93s&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=zrJSe7n5LT2LVFOdp88ANA&oh=00_AfSs7m5SfyTnwDtLquJB0SFPwQhV6tunLhVLQ4NBXN6qyQ&oe=68881767"
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
