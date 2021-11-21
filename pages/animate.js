import { motion } from "framer-motion";

const myAnimatedSquareVariants = {
  howItShouldLookLikeAtTheStart: {
    height: 0,
    width: 0,
    backgroundColor: "#0000ff",
  },
  howItShouldLookLikeAtTheEnd: {
    height: 200,
    width: 200,
    backgroundColor: "#c00030",
    transition: {
      delayChildren: 0.5,
    },
  },
};

const myAnimatedText = {
  howItShouldLookLikeAtTheStart: {
    opacity: 0,
  },
  howItShouldLookLikeAtTheEnd: {
    opacity: 1,
    color: "#fff",
    scale: 3,
  },
};

const animate = () => {
  return (
    <div className="m-20">
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial="howItShouldLookLikeAtTheStart"
        animate="howItShouldLookLikeAtTheEnd"
        variants={myAnimatedSquareVariants}
      >
        <motion.h1 variants={myAnimatedText}>Hey</motion.h1>
      </motion.div>
    </div>
  );
};

export default animate;
