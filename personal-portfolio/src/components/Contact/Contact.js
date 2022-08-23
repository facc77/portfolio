import { useState } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [buttonHover, setbuttonHover] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY,
    );
    setTimeout(function () {
      setTimeout(setLoading(false));
      toast.success('Mensaje enviado!', {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
    }, 3000);
  };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <img
              src='https://raw.githubusercontent.com/Adam-pw/Adam-pw/main/animation_500_kxa883sd.gif'
              alt='Contact Us'
            />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Contactame!</h2>

              <form onSubmit={sendEmail}>
                <div className='input-group'>
                  <div className='input-group-addon contactIcons'>
                    <i className='fa-solid fa-user'></i>
                  </div>
                  <input
                    type='text'
                    name='from_name'
                    placeholder='Nombre'
                    required
                  />
                </div>
                <div className='input-group'>
                  <div className='input-group-addon  contactIcons'>
                    <i class='fa-solid fa-paper-plane'></i>
                  </div>
                  <input
                    type='email'
                    name='from_email'
                    placeholder='Email'
                    required
                  />{' '}
                </div>
                <div className='input-group'>
                  <div className='input-group-addon contactIcons'>
                    <i className='fa-solid fa-envelope-open-text'></i>
                  </div>
                  <textarea name='message' placeholder='Mensaje' required />
                </div>
                <div className='buttonHolder'>
                  <button
                    type='submit'
                    onMouseEnter={() => setbuttonHover(true)}
                    onMouseLeave={() => setbuttonHover(false)}
                  >
                    {loading ? (
                      <>
                        <span
                          class={
                            buttonHover
                              ? 'spinner-border spinner-border-sm text-light'
                              : 'spinner-border spinner-border-sm '
                          }
                          role='status'
                          aria-hidden='true'
                        ></span>
                        Enviar
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Contact;
