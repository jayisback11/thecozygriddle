import React from 'react';
import './ContactSection.css';
import { motion } from 'framer-motion';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactSectionImg from '../../utils/images/contact-section-img.jpg';

function ContactSection() {
  return (
    <div className='contact-section text-light py-5 shadow'>
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
                    <img src={"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nptzwNCfipxfkk6YiIVETVM9haPoJIKUYWcSrpsVPK8TpvijWNn8fINcdsRX2_vXjaXCPf8Rzi5yhQkx2SY5q1xlL1eyNe5v8Bi3p00SHkS8hrQzzbhBRv4ZJqhsW8T3O9iRe0-=s680-w680-h510-rw"} className='img-fluid' alt="" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection;