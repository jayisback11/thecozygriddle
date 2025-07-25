import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BreakfastImg from "../../utils/images/breakfast-img.jpg";
import LunchImg from "../../utils/images/lunch-img.jpg";
import DinnerImg from "../../utils/images/dinner-img.jpg";
import DessertImg from "../../utils/images/dessert-img.jpg";
import DrinksImg from "../../utils/images/drinks-img.jpg";
import breakfast from "../../utils/breakfast";
import lunch from "../../utils/lunch";
import dinner from "../../utils/dinner";
import dessert from "../../utils/dessert";
import drink from "../../utils/drink";
import MenuSec from "../../components/MenuSection/MenuSection";
import data from "../../data.json";

function Menu() {
  return (
    <div className="menu-page">
      <MenuSec />

      <motion.div
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to="/contact">
          <button
            type="button"
            className="btn  btn-lg rounded-0 text-capitalize mx-2 shadow"
            style={{ backgroundColor: data.theme.color, color: "white" }}
          >
            Book your table
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Menu;
