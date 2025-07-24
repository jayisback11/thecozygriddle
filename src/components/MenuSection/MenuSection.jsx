import React from "react";
import "./MenuSection.css";
import { motion } from "framer-motion";
import food from "../../utils/food";
import drinks from "../../utils/drinks";
import MenuBtn from "../MenuBtn/MenuBtn";
import MenuDemps from "./MenuDempeys";

function MenuSection() {
  return (
    <div className="menu-section py-5 text-light shdow">
      <div className="container d-flex flex-column align-items-center">
        <MenuDemps />
      </div>
    </div>
  );
}

export default MenuSection;
