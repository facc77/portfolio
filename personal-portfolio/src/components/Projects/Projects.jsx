import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./style.css";
import colorSharp2 from "../../assets/img/color-sharp2.webp";
import "animate.css";
import Card from "../Card.js/Card";
import { projects } from "./ProjectsList";

const Projects = () => {
  const variants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Projects completed with deployed page and corresponding code!
              </p>
              <motion.div
                variants={variants}
                initial="initial"
                whileInView="inView"
                className="d-flex w-60 flex-wrap  project-container"
              >
                {projects.map((project, i) => {
                  return <Card {...project} key={i} />;
                })}
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        alt="bannerImage"
        className="background-image-right"
        src={colorSharp2}
      ></img>
    </section>
  );
};

export default Projects;
