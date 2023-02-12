import React from 'react'
import './Main.css'
import fotografo from '../../imagenes/fotografo.jpg'
import mujer from '../../imagenes/mujer.jpg'
import arbol from '../../imagenes/arbol.jpg'
import cataratas from  '../../imagenes/cataratas.jpg'
import asado from '../../imagenes/asado.jpg'
import bandera from '../../imagenes/bandera.jpg'
import glaciar from '../../imagenes/glaciar.jpg'
import montania from '../../imagenes/montania.jpg'
import ninio from '../../imagenes/ninio.jpg'
import obelisco from '../../imagenes/obelisco.jpg'
import mujer2 from '../../imagenes/mujer2.jpg'
const Main =()=>{ 
    return (
      <>
      <section className='main'>
        <img src={fotografo} alt="fotografo" className='fotografo' id='sobremi' />
        <img src={mujer} alt="mujer" className='mujer'/>
        <img src={arbol} alt="arbol" className='arbol'/>
      </section>
      <div className="about">
        <h1>Sobre mi</h1>
        <p>En 2017 decidí estudiar la carrera de Licenciatura en Fotografia en la Universidad Nacional de San Martín, graduandome en 2020. Ahora resido en la ciudad de Rosario, dedicandome casi exclusivamente a la fotografía de la naturaleza.</p>
      </div>
      <section className="contacto" id='contacto'>
        <h1>Capturá los mejores momentos de tu vida</h1>
        <button id='contacto'>CONTACTO</button>
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
      </>
    )
}
export default Main;
