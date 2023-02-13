import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {AiOutlineArrowDown} from 'react-icons/ai'

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className='header' id='inicio'>
      <div className='miclase'>
        <a href='#portfolio'>Portfolio</a>
        <div className='navbar'>
          <a href='#inicio'>Inicio</a>
          <a href='#sobremi'>Sobre mi</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#precios'>Precios</a>
          <a href='#contacto'>Contacto</a>
          <a href='#blog'>Blog</a>
        </div>
      </div>
      <div className='recuadro'>
        <div className='disenioizq'>
          <div className='linea1'></div>
          <a
            href='https://www.behance.net/gallery/99902869/Website-for-the-photographer-UIUX-design?tracking_source=search_projects%7Cportfolio'
            target={'_blank'} rel="noreferrer"
          >
            <i class='fa-brands fa-behance'></i>
          </a>
          <a href='https://www.instagram.com/rodri.arroyo/' target={'_blank'} rel="noreferrer">
            <i class='fa-brands fa-instagram'></i>
          </a>
          <a
            href='https://ar.pinterest.com/search/pins/?q=nature&rs=typed'
            target={'_blank'} rel="noreferrer"
          >
            <i class='fa-brands fa-pinterest'></i>
          </a>
          <div className='linea2'></div>
        </div>
        <div className='textos'>
          <div className='texto'>
            <a href='https://www.instagram.com/rodri.arroyo/' target={'_blank'} rel="noreferrer">
            <span className='texto1'>R</span>
            <span className='texto1'>o</span>
            <span className='texto1'>d</span>
            <span className='texto1'>r</span>
            <span className='texto1'>i</span>
            <span className='texto1'>g</span>
            <span className='texto1'>o</span>
            <span className='texto1'> M.</span>
            <span className='texto1'> A</span>
            <span className='texto1'>r</span>
            <span className='texto1'>r</span>
            <span className='texto1'>o</span>
            <span className='texto1'>y</span>
            <span className='texto1'>o</span>
            </a>
          </div>
          <h2 className='texto2'> Fotógrafo</h2>
        </div>
      </div>
      {showButton && (
        <button className='boton-ir-arriba' onClick={handleClick}>
          Ir arriba
        </button>
      )}
    </header>
    <a href='#sobremi' className="deslice">
    <AiOutlineArrowDown /> Deslice hacia abajo <AiOutlineArrowDown />
    </a>
    </>
  );
};

export default Navbar;

