import { motion } from "framer-motion";
import React, { useState } from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
    layoutId="underline"
    layout
  ></motion.div>
);

const NiceMenu = () => {
  return (
    <div className="w-screen p-20">
      <motion.div className="border p-10 flex justify-center">
        <MenuItem text={"Home"}>
          <SubItem title="Product" text="A SaaS for e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"About us"} style={{ minWidth: 400 }}>
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem title="The Company" text="Since 1998" />
          <SubItem
            title="Our Mission"
            text="Increase the GDP of the internet"
          />
          <SubItem title="Investors" text="who's backing us" />
        </MenuItem>
        <MenuItem text={"Products"} style={{ minWidth: 400 }}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
      </motion.div>
    </div>
  );
};

const MenuItem = ({ text, children }) => {
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
      {isBeingHovered && <SubItemsContainer>{children}</SubItemsContainer>}
    </motion.div>
  );
};

const SubItemsContainer = ({ children }) => {
  return (
    <div className="py-5 min-w-max">
      <motion.div
        layoutId="menu"
        className="absolute border border-1 shadow-lg py-10 px-10 bg-white rounded-box -left-2/4"
        style={{ minWidth: 400 }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
};

const SubItem = ({ title, text }) => {
  return (
    <motion.div className="my-2 group cursor-pointer min-w-max" layout>
      <div className="flex items-center gap-4">
        <Hashicon value={title} size={25} />
        <div className="">
          <p className="font-bold text-gray-800 group-hover:text-blue-900 text-md">
            {title}
          </p>
          <span className="font-bold text-gray-400 group-hover:text-blue-400 text-sm">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default NiceMenu;
