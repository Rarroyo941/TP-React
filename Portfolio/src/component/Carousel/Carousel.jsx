import './Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import feedback1 from '../../imagenes/feedback1.jpg';
import feedback2 from '../../imagenes/feedback2.jpg';
import feedback3 from '../../imagenes/feedback3.jpg';

const Carrusel =()=>{ 
    return (
        <>
        <h1 className='comentarios'>Comentarios</h1>
        <Carousel variant='dark'>
      <Carousel.Item>
        <div className="d-flex align-items-center">
          <div className="p-3">
            <p>Logra capturar la belleza y complejidad de la naturaleza de una forma espectacular, además de un uso magistral del color y la luz.</p>
            <h3>- Roberto C.</h3>
          </div>
        <img
          className="d-block w-50"
          src={feedback1}
          alt="First slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex align-items-center">
        <div className="p-3">
            <p>Muy profesional, y un presupuesto acorde a lo que esperabamos, super recomendado.</p>
            <h3>- Carlos F.</h3>
        </div>
        <img
          className="d-block w-50"
          src={feedback2}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex align-items-center">
        <div className="p-3">
            <p>Tiene un talento increible, entregó las fotos en tiempo y forma, me encantó el trabajo que hizo!</p>
            <h3>- María A.</h3>
        </div>
        <img
          className="d-block w-50"
          src={feedback3}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
    </>
    )
}
export default Carrusel;
