export const textVariant = (originX) => {
  return {
    initial: {
      x: originX === "l" ? -500 : 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
    astronautImg: {
      y: [-7, 7, -7],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
};

export const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
