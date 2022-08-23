import './style.css';
import colorSharp from '../../assets/img/color-sharp.png';
import { techs } from '../../assets/techs';

const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>Tecnologías con las que trabajé y me encantan</p>
              <div className='d-flex flex-wrap w-100 justify-content-around'>
                {techs.map(({ iconClass, title, cardClass, id }) => {
                  return (
                    <div key={id} className={`skillCard ${cardClass} p-2`}>
                      <i className={`skillIcon ${iconClass}`}></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='background'
      />
    </section>
  );
};

export default Skills;
