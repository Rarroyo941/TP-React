import React from 'react';
import './Main.css';
import fotografo from '../../imagenes/fotografo.jpg';
import mujer from '../../imagenes/mujer.jpg';
import arbol from '../../imagenes/arbol.jpg';
import cataratas from '../../imagenes/cataratas.jpg';
import asado from '../../imagenes/asado.jpg';
import bandera from '../../imagenes/bandera.jpg';
import glaciar from '../../imagenes/glaciar.jpg';
import montania from '../../imagenes/montania.jpg';
import ninio from '../../imagenes/ninio.jpg';
import obelisco from '../../imagenes/obelisco.jpg';
import mujer2 from '../../imagenes/mujer2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useForm, ValidationError } from '@formspree/react';

const Main = () => {
  const [state, handleSubmit] = useForm("mpzedabb");
  if (state.succeeded) {
      alert('¡Hemos recibido tu mensaje!');
  }
  return (
    <>
      <section className='main'>
        <img src={fotografo} alt='fotografo' className='fotografo' id='sobremi' />
        <img src={mujer} alt='mujer' className='mujer' />
        <img src={arbol} alt='arbol' className='arbol' />
      </section>
      <div className='about'>
        <h1>Sobre mi</h1>
        <p>
          En 2017 decidí estudiar la carrera de Licenciatura en Fotografia en la Universidad Nacional de San Martín,
          graduándome en 2020. Ahora resido en la ciudad de Rosario, dedicándome casi exclusivamente a la fotografía de la
          naturaleza.
        </p>
      </div>
      <section className='contacto' id='contacto'>
        <div></div>
        <h1>Capturá los mejores momentos de tu vida</h1>
        
        <form onSubmit={handleSubmit} className='contact-form'>
          <label for='nombre'>Nombre:</label>
          <input type='text'  name='nombre'  id="nombre" />
          <ValidationError 
        prefix="Nombre" 
        field="nombre"
        errors={state.errors}
      />
          <label htmlFor="email">Email: </label>
          <input type='email' name='email'  id="email"/>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <label for='telefono'>Teléfono:</label>
          <input type='number' name='telefono'  id="telefono" />
          <ValidationError 
        prefix="Number" 
        field="number"
        errors={state.errors}
      />
          <label for='mensaje'>Mensaje:</label>
          <textarea name='mensaje'  id="message" />
          <button type='submit' className='form-btn' disabled={state.submitting}>
            Enviar
          </button>
        </form> 
      </section>     
      <section className='galeria' id='portfolio'>
        <div className="grid-item"><img src={bandera} alt="bandera"/></div>
        <div className='grid-item'><p>Portfolio</p></div>
        <div className="grid-item"><img src={cataratas} alt="cataratas"/></div>
        <div className="grid-item"><img src={glaciar} alt="glaciar"/></div>
        <div className="grid-item"><img src={mujer2} alt="mujer"/></div>
        <div className="grid-item"><img src={ninio} alt="ninio"/></div>
        <div className="grid-item"><img src={montania} alt="montania"/></div>
        <div className="grid-item"><img src={obelisco} alt="obelisco"/></div>
        <div className="grid-item"><img src={asado} alt="asado"/></div>
      </section>
      <section className='galeria-responsive'>
        <h1 id='portfolio' className='galeria-responsive-title'>Portfolio</h1>
        <Carousel variant='dark'>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={bandera}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={cataratas}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={glaciar}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={mujer2}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={ninio}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
          <img
            className="d-block w-100"
            src={montania}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
            <img
              className="d-block w-100"
              src={obelisco}
              alt="Seventh slide"
            />
          </Carousel.Item>
        <Carousel.Item className='carousel-item-responsive'>
            <img
              className="d-block w-100"
              src={asado}
              alt="Eight slide"
            />
          </Carousel.Item>
        </Carousel>
    </section>
      </>
    )
}
export default Main;
