import './Main.css';
import fotografo from '../../imagenes/fotografo.jpg';
import mujer from '../../imagenes/mujer.jpg'
import arbol from '../../imagenes/arbol.jpg'


const Main =()=>{ 
    return (
      <>
      <div className='main'>
        <img src={fotografo} alt="fotografo" className='fotografo'  />
        <img src={mujer} alt="mujer" className='mujer'/>
        <img src={arbol} alt="arbol" className='arbol'/>
      </div>
      <div className="about">
        <h2>Sobre mi</h2>
        <p>En 2017 decidí estudiar la carrera de Licenciatura en Fotografia en la Universidad Nacional de San Martín, graduandome en 2020. Ahora resido en la ciudad de Rosario, dedicandome exclusivamente a la fotografía de la naturaleza.</p>
      </div>
      <div className="contacto">
        <h1>Capturá los mejores momentos de tu vida</h1>
        <button>CONTACTO</button>
      </div>
      </>
    )
}
export default Main;
