import React, { useState } from "react";

const MyFirstAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen  flex m-20">
      <div className="w-1/2">
        <h1 className="text-8xl font-extrabold mb-10">
          Multi step forms that actually convert
        </h1>
        {!isOpen && (
          <button
            className="btn btn-block max-w-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sign up
          </button>
        )}
        {isOpen && (
          <div className="form-control max-w-md">
            <label className="label">
              <span className="label-text">What&apos;s your email?</span>
            </label>
            <input
              type="text"
              placeholder="animation@mikealche.com"
              className="input input-bordered input-primary mb-5"
            />
            <button
              className="btn btn-block max-w-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              Send
            </button>
          </div>
        )}
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default MyFirstAnimation;
