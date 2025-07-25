import React from "react";
import { motion } from "framer-motion";
import data from "../../data.json";
import { Link } from "react-router-dom";

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
        {data.contact.address} <br />{" "}
        <span style={{ fontWeight: "bold" }}>{data.contact.phone}</span>
      </p>

      <h3 className="text-capitalize">Opening hours</h3>
      <p className="m-0">Mon: {data.contact.hours.mon}</p>
      <p className="m-0">Tue: {data.contact.hours.tue}</p>
      <p className="m-0">Wed: {data.contact.hours.wed}</p>
      <p className="m-0">Thu: {data.contact.hours.thu}</p>
      <p className="m-0">Fri: {data.contact.hours.fri}</p>
      <p className="m-0">Sat: {data.contact.hours.sat}</p>
      <p className="m-0">Sun: {data.contact.hours.sun}</p>

      <div className="mt-5">
        {data.aboutussection.socmed.doordash && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={data.aboutussection.socmed.doordash}
          >
            <button
              type="button"
              className="btn btn-outline-light btn-lg rounded text-capitalize mx-2 shadow"
              style={{ backgroundColor: "#FF3008" }}
            >
              Doordash
            </button>
          </Link>
        )}

        {data.aboutussection.socmed.ubereats && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={data.aboutussection.socmed.ubereats}
          >
            <button
              type="button"
              className="btn btn-outline-light btn-lg rounded text-capitalize mx-2 shadow"
              style={{ backgroundColor: "#06C167" }}
            >
              Ubereats
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default ContactInfo;
