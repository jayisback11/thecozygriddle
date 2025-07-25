import React from "react";
import "./MenuSection.css";
import { motion } from "framer-motion";
import food from "../../utils/food";
import drinks from "../../utils/drinks";
import MenuBtn from "../MenuBtn/MenuBtn";
import MenuDemps from "./MenuDempeys";
import data from "../../data.json";

function MenuSection() {
  return (
    <div
      className="menu-section py-5 mt-5 text-light shdow "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.menu.backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex flex-column align-items-center">
        <MenuDemps />
      </div>
    </div>
  );
}

export default MenuSection;
