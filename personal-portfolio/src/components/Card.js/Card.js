import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({
  title,
  img,
  description,
  backgroundColor,
  logo,
  descriptionColor,
  demoUrl,
  codeUrl,
}) => {
  const [isHoveringDemo, setIsHoveringDemo] = useState(false);
  const [isHoveringCode, setIsHoveringCode] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  return (
    <>
      {width > 768 ? (
        <div class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <img
                src={img}
                alt='Avatar'
                style={{ width: '300px ', height: '200px' }}
              />
            </div>
            <div
              class='flip-card-back'
              style={{
                backgroundColor: backgroundColor,
                color: descriptionColor,
              }}
            >
              <img src={logo} alt='logo' className='cardLogo mt-3' />
              <h4>{title}</h4>
              <p style={{ color: descriptionColor }}>{description}</p>
              <a
                href={demoUrl}
                className='btn'
                style={{
                  transition: '.5s',
                  border: `1px solid ${descriptionColor}`,
                  backgroundColor: isHoveringDemo
                    ? descriptionColor
                    : backgroundColor,
                  color: isHoveringDemo ? backgroundColor : descriptionColor,
                }}
                onMouseEnter={() => setIsHoveringDemo(true)}
                onMouseLeave={() => setIsHoveringDemo(false)}
              >
                Demo
              </a>
              <a
                href={codeUrl}
                className='btn'
                style={{
                  transition: '.5s',
                  border: `1px solid ${descriptionColor}`,
                  backgroundColor: isHoveringCode
                    ? descriptionColor
                    : backgroundColor,
                  color: isHoveringCode ? backgroundColor : descriptionColor,
                }}
                onMouseEnter={() => setIsHoveringCode(true)}
                onMouseLeave={() => setIsHoveringCode(false)}
              >
                Código
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div class='flip-responsive-card'>
          <div class='flip-responsive-inner'>
            <div class='flip-card-front'>
              <div
                className='cardText'
                style={{ backgroundColor: backgroundColor }}
              >
                <h3>{title}</h3>
              </div>
              <img
                src={img}
                alt='Avatar'
                style={{ width: '300px ', height: '200px' }}
              />
              <div className='cardButtons'>
                <a
                  href={demoUrl}
                  className='btn demoBtn mr-1'
                  style={{
                    backgroundColor: descriptionColor,
                    color: backgroundColor,
                  }}
                >
                  Demo
                </a>
                <a
                  href={codeUrl}
                  className='btn codeBtn'
                  style={{
                    backgroundColor: descriptionColor,
                    color: backgroundColor,
                  }}
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
