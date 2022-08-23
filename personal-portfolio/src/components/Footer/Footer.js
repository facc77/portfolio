import { Container, Row, Col } from 'react-bootstrap';
import { SocialBar } from '../SocialBar/SocialBar';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <SocialBar />
        </Row>
        <Row className='mt-3'>
          <Col size={12} sm={6}>
            <h3 className='footer-logo'>PORTFOLIO</h3>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <p>Ferrer Gonzalo Facundo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
