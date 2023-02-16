import React, { useState } from 'react';
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

const Main = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const valid = nombre !== '' && email !== '' && telefono !== '';

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

 

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
        
        <form onSubmit={handleSubmit} className='contact-form' action="https://formsubmit.co/arroyo.rodrigo@outlook.com" target='_blank' method="POST" rel="noreferrer">
          <label for='nombre'>Nombre:</label>
          <input type='text' value={nombre} onChange={(event) => setNombre(event.target.value)} name='nombre' />
          <label for='email'>Email: </label>
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} name='email' />
          <label for='telefono'>Teléfono:</label>
          <input type='number' value={telefono} onChange={(event) => setTelefono(event.target.value)} name='telefono' />
          <label for='mensaje'>Mensaje:</label>
          <textarea value={mensaje} onChange={(event) => setMensaje(event.target.value)} name='mensaje' />
          <button type='submit' className='form-btn' disabled={!valid}>
            Enviar
          </button>
        </form>
        <h2 style={{ display: showPopup ? 'block' : 'none' }} className="respuesta-form">
  Sus datos fueron enviados con éxito!
</h2>       
      </section> 
      <h2 style={{ display: showPopup ? 'block' : 'none' }} className="respuesta-form-responsive">
  Sus datos fueron enviados con éxito!
</h2>      
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
      </>
    )
}
export default Main;
