import colorSharp from "../../assets/img/color-sharp.webp";
import { techs } from "./techList";
import MagneticWrapper from "./MagneticWrapper/MagneticWrapper";
import "./style.css";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technologies I have worked with and love</p>
              <div className="d-flex flex-wrap w-100 justify-content-around">
                {techs.map(({ iconClass, cardClass }) => {
                  return (
                    <MagneticWrapper key={cardClass}>
                      <div className={`skillCard ${cardClass} p-2`}>
                        <i className={`skillIcon ${iconClass}`}></i>
                      </div>
                    </MagneticWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

export default Skills;
