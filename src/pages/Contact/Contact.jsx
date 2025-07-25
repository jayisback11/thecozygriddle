import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Reviews from "../../components/Reviews/Reviews";

function Contact() {
  return (
    <div className="contact-page" id="contact-page">
      <header className="height-50 mt-5">
        <motion.div
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-light">Contact</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8228.314049013226!2d-90.86806519999999!3d30.488112599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626c1bcb8b9f5fd%3A0x913c4d6cb2b18dc2!2sSam&#39;s%20of%20Walker!5e1!3m2!1sen!2sus!4v1753449704035!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
