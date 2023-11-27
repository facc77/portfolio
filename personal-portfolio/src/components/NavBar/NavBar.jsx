import { useState, useEffect } from 'react';
import './style.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    closeNav();
  };

  return (
    <Navbar
      expand='md'
      className={scrolled ? 'scrolled' : ''}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href='/' onClick={closeNav}>
          <p className='porfolio-logo'>PORTFOLIO</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={navToggle}>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home'
                  ? 'active navbar-link pixel-button'
                  : 'navbar-link pixel-button'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              <i className='fa-solid fa-house navIcons'></i>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills'
                  ? 'active navbar-link pixel-button'
                  : 'navbar-link pixel-button'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              <i className='fa-solid fa-bolt-lightning navIcons'></i>
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects'
                  ? 'active navbar-link pixel-button'
                  : 'navbar-link pixel-button'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              <i className='fa-solid fa-suitcase navIcons'></i>
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link
              aria-controls='basic-navbar-nav'
              data-bs-target='.navbar-collapse.show'
              href='#contact'
              className={
                activeLink === 'contact'
                  ? 'active navbar-link pixel-button'
                  : 'navbar-link pixel-button'
              }
              onClick={() => onUpdateActiveLink('contact')}
            >
              <i className='fa-solid fa-comments navIcons'></i>
              <span>Contacto</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
