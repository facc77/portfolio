import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, easeInOut } from "framer-motion";
import "./style.css";

const Parallax = () => {
  const ref = useRef();
  const ref2 = useRef(null);
  const isTextInView = useInView(ref2, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const text = "Front End";

  const YPos = (percentage) =>
    useTransform(scrollYProgress, [0, 1], ["0%", percentage], {
      easing: easeInOut,
    });

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 ref={ref2} style={{ y: YPos("600%") }}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              opacity: isTextInView ? 1 : 0,
              transition: `all ${i + 1.3}s  0.5s`,
            }}
          >
            {char}
          </span>
        ))}
      </motion.h1>
      <motion.div style={{ y: YPos("100%") }} className="moon" />
      <motion.div style={{ x: YPos("100%") }} className="stars" />
      <motion.div style={{ y: YPos("50%") }} className="mountains1" />
      <motion.div style={{ y: YPos("40%") }} className="mountains2" />
      <motion.div style={{ y: YPos("30%") }} className="mountains3" />
      <motion.div className="mountains4" />
    </div>
  );
};

export default Parallax;
