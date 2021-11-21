import React from "react";

const NiceMenu = () => {
  return (
    <div className="w-screen p-20 ">
      <div className="border p-10 flex justify-center">
        <MenuItem text={"Home"}></MenuItem>
        <MenuItem text={"About us"} style={{ minWidth: 400 }}></MenuItem>
        <MenuItem text={"Products"} style={{ minWidth: 400 }}></MenuItem>
      </div>
    </div>
  );
};

const MenuItem = ({ text, children, ...props }) => {
  return (
    <div className="px-10 relative cursor-pointer">
      <span className="relative">{text}</span>
    </div>
  );
};

export default NiceMenu;
