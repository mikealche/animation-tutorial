import { motion } from "framer-motion";
import React, { useState } from "react";

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
    layoutId="underline"
    layout
  ></motion.div>
);

const NiceMenu = () => {
  return (
    <div className="w-screen p-20 ">
      <motion.div className="border p-10 flex justify-center">
        <MenuItem text={"Home"}></MenuItem>
        <MenuItem text={"About us"} style={{ minWidth: 400 }}></MenuItem>
        <MenuItem text={"Products"} style={{ minWidth: 400 }}></MenuItem>
      </motion.div>
    </div>
  );
};

const MenuItem = ({ text, children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-10 relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        {text}
        {isBeingHovered && <Underline />}
      </span>
    </motion.div>
  );
};

export default NiceMenu;
