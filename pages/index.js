import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Form from "../components/Form";

const MyFirstAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen  flex m-20">
      <div className="w-1/2">
        <motion.h1 className="text-8xl font-extrabold mb-10">
          Multi step forms that actually convert
        </motion.h1>
        {!isOpen && (
          <motion.button
            layoutId="signup"
            layout
            className="btn no-animation btn-outline btn-block max-w-md"
            onClick={() => setIsOpen(!isOpen)}
            exit={{
              opacity: 0,
              backgroundColor: "#c00030",
            }}
          >
            Sign up
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            layout
            className="form-control max-w-md inline-block w-full"
          >
            <motion.input
              type="text"
              layout
              placeholder="animation@mikealche.com"
              className="input input-bordered input-primary mb-5 w-1/2"
            />
            <motion.button
              layout
              layoutId="signup"
              className="btn btn-outline no-animation w-1/2 max-w-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              Send
            </motion.button>
          </motion.div>
        )}
      </div>
      <div className="w-1/2 p-10">
        <Form />
      </div>
    </div>
  );
};

export default MyFirstAnimation;
