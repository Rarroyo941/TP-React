import React, { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs'
import './Cards.css'
import Card from 'react-bootstrap/Card';
import aurora from '../../imagenes/aurora.jpg'
import photoshop from '../../imagenes/photoshop.jpg'
import panqueque from '../../imagenes/panqueque.jpg'

const Blog = () => {
  const [visitasAurora, setVisitasAurora] = useState(parseInt(localStorage.getItem('visitasAurora')) || 0);
  const [visitasPhotoshop, setVisitasPhotoshop] = useState(parseInt(localStorage.getItem('visitasPhotoshop')) || 0);
  const [visitasPanqueque, setVisitasPanqueque] = useState(parseInt(localStorage.getItem('visitasPanqueque')) || 0);

  const aumentarVisitasAurora = () => {
    const visitasAnteriores = localStorage.getItem('visitasAurora') || 0;
    const nuevasVisitas = parseInt(visitasAnteriores) + 1;
    localStorage.setItem('visitasAurora', nuevasVisitas);
    setVisitasAurora(nuevasVisitas);
  };

  const aumentarVisitasPhotoshop = () => {
    const visitasAnteriores = localStorage.getItem('visitasPhotoshop') || 0;
    const nuevasVisitas = parseInt(visitasAnteriores) + 1;
    localStorage.setItem('visitasPhotoshop', nuevasVisitas);
    setVisitasPhotoshop(nuevasVisitas);
  };

  const aumentarVisitasPanqueque = () => {
    const visitasAnteriores = localStorage.getItem('visitasPanqueque') || 0;
    const nuevasVisitas = parseInt(visitasAnteriores) + 1;
    localStorage.setItem('visitasPanqueque', nuevasVisitas);
    setVisitasPanqueque(nuevasVisitas);
  };

  return (
    <section className='blog' id='blog'>
      <h1 className='blogTitulo'>Blog</h1>
      <div className="cards-container">
        <a href='https://www.xatakafoto.com/trucos-y-consejos/trucos-practicos-para-llevar-tus-fotos-de-paisaje-a-un-nivel-superior' target={'_blank'} rel="noreferrer" onClick={aumentarVisitasAurora}>
          <Card className="card">
            <Card.Img variant="top" src={aurora} class className="cards-imagen"/>
            <Card.Body>
              <Card.Title className='card-texto'>Trucos Prácticos para Llevar tus Fotos de Paisaje a un Nivel Superior</Card.Title>
              <div className='icon-container'>
                <BsEyeFill style={{ color: 'grey' }} />
                <span>{visitasAurora}</span>
              </div>
            </Card.Body>
          </Card>
        </a>
        <a href='https://www.xataka.com/fotografia-y-video/los-14-retoques-mas-faciles-de-photoshop-que-te-van-a-dar-mejor-resultado-para-editar-fotos' target={'_blank'} rel="noreferrer" onClick={aumentarVisitasPhotoshop}>
          <Card className="card">
            <Card.Img variant="top" src={photoshop} className="cards-imagen" />
            <Card.Body>
              <Card.Title className='card-texto'>Consejos Básicos de Photoshop para Darle un Toque Extra a tus Fotografías</Card.Title>
              <div className='icon-container'>
                <BsEyeFill style={{ color: 'grey' }} />
                <span>{visitasPhotoshop}</span>
              </div>
            </Card.Body>
          </Card>
        </a>
        <a href="https://www.blogdelfotografo.com/fotografia-gastronomica-2/" target={'_blank'} rel="noreferrer" onClick={aumentarVisitasPanqueque} >
          <Card className="card">
            <Card.Img variant="top" src={panqueque} className="cards-imagen" />
            <Card.Body>
              <Card.Title className="card-texto">La Guía Completa para Hacer Fotografías Gastronómicas</Card.Title>
        <div className='icon-container'>
        <BsEyeFill style={{ color: 'grey' }} />
        <span>{visitasPanqueque}</span>
        </div>
      </Card.Body>
    </Card>
    </a>
    </div>
    </section>
  );
}

export default Blog;
