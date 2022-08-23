import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import mlLogo from '../../assets/img/mlLogo.png';
import srLogo from '../../assets/img/sanRemoLogo.jpg';
import hektoLogo from '../../assets/img/hektoLogo.png';
import meliImage from '../../assets/img/mercadolibre.png';
import clinicaSanRemo from '../../assets/img/clinicaSanRemo.png';
import hektoImage from '../../assets/img/hektoImage.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import 'animate.css';
import Card from '../Card.js/Card';

const Projects = () => {
  const projects = [
    {
      title: 'Meli Challenge',
      description: 'Detalle de un producto',
      descriptionColor: '#fff',
      backgroundColor: '#ffe600',
      img: meliImage,
      logo: mlLogo,
      demoUrl: 'https://meli-challenge-ferrerfacu.netlify.app/',
      codeUrl:
        'https://github.com/facc77/mercadolibre-detail-challenge/tree/master/mercadolibre-detail',
    },
    {
      title: 'Clínica San Remo',
      description: 'Clínica para sacar turnos online',
      descriptionColor: '#000',
      backgroundColor: '#fff',
      img: clinicaSanRemo,
      logo: srLogo,
      demoUrl: 'https://clinicasanremo.netlify.app/',
      codeUrl: 'https://github.com/facc77/Proyecto-Final-React',
    },
    {
      title: 'Hekto e-commerce',
      description: 'Tienda online',
      descriptionColor: '#d3d3d3',
      backgroundColor: 'rgb(25, 118, 210)',
      img: hektoImage,
      logo: hektoLogo,
      demoUrl: 'https://heroku-ecommerce.netlify.app/',
      codeUrl: 'https://github.com/facc77/e-commerce-2022',
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Proyectos realizados con página deployada y codigo
                correspondiente!
              </p>
              <div className='d-flex w-60 flex-wrap  project-container'>
                {projects.map((project) => {
                  return <Card {...project} />;
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        alt='bannerImage'
        className='background-image-right'
        src={colorSharp2}
      ></img>
    </section>
  );
};

export default Projects;
