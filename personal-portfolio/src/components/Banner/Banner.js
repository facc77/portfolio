import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { sliderVariants, textVariant } from "./animation.js";
import scroll from "../../assets/img/scroll.png";
import header4 from "../../assets/img/header4.png";
import "./style.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container className="topSection">
        <Row className="aligh-items-center bannerRow">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              variants={textVariant("l")}
              initial="initial"
              animate="animate"
            >
              <motion.span className="tagline" variants={textVariant("l")}>
                Ferrer Gonzalo Facundo
              </motion.span>
              <motion.h1
                data-shadow="Soy web developer!"
                className="developer-title"
                variants={textVariant("l")}
              >
                Web developer
              </motion.h1>
              {/*  <motion.p
                className="mt-5 bannerDescriptionColor"
                variants={textVariant("l")}
              >
                Soy un desarrollador apasionado que disfruta ser desafiado y
                participar en proyectos que requieren que trabaje fuera de mi
                zona de comfort para crecer más y más cada día.
              </motion.p> */}
            </motion.div>
            <motion.div
              className="scrollImgCont"
              variants={textVariant("l")}
              animate="scrollButton"
            >
              <img src={scroll} alt="scroll" className="scrollImg" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              variants={textVariant("r")}
              initial="initial"
              animate="animate"
            >
              <motion.img
                variants={textVariant("r")}
                animate="astronautImg"
                src={header4}
                className="astronaut-image"
                alt="Header Img"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <motion.div
        className="slidingTextCont"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        The ultimate web experience
      </motion.div>
    </section>
  );
};

export default Banner;
