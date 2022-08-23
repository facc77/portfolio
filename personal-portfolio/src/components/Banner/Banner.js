import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import header4 from '../../assets/img/header4.png';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center bannerRow'>
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className='tagline'>Ferrer Gonzalo Facundo</span>
              <h1 data-shadow='Soy web developer!' className='developer-title'>
                Soy web developer
              </h1>
              <p className='mt-5 bannerDescriptionColor'>
                Soy un desarrollador apasionado que disfruta ser desafiado y
                participar en proyectos que requieren que trabaje fuera de mi
                zona de comfort para crecer más y más cada día.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={header4} className='astronaut-image' alt='Header Img' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
